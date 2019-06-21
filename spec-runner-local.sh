# Asteria Group LLC 2019 www.asteriag.com
#!/bin/bash
# Ask an Engineer about type of browser
echo NEXT QUESTION:
PS3='Please choose an option for browser type > '
select option in Chrome Safari Firefox EXIT
do
    case $option in
        Chrome) 
            type='chrome'
            break;;
        Safari)
            type='safari'
            break;;
        Firefox)
            type='firefox'
            break;;
        EXIT)
            exit
     esac
done
echo You selected $type

#Ask an Engineer about test suite folder
echo ' '
echo NEXT QUESTION:
PS3='Do you want to run TC from SMOKE, FUNCTIONAL folder OR TEST SUITE? > '
select option2 in  "UI-SMOKE" "UI-FUNCTIONAL" "RUN TEST SUITE" EXIT
do
    case $option2 in
        UI-SMOKE) 
            folder='ui-smoke'
            break;;
        UI-FUNCTIONAL)
            folder='ui-functional'
            break;;
        "RUN TEST SUITE")
            folder='--suite'
            break;;
        EXIT)
            exit
     esac
done

if [[ ! $folder == '--suite' ]]; then
    #Ask an Engineer about path to feature(TC)
    echo ' '
    echo NEXT QUESTION:
    PS3='Do you know PATH to feature(Test Case)? > '
    select option2 in YES NO EXIT
    do
        case $option2 in
            YES) 
                path_to_feature='YES'
                break;;
            NO)
                path_to_feature='NO'
                break;;
            EXIT)
                exit
        esac
    done

    #Ask an Engineer about folder and/or feature(TC) name
    echo ' '
    echo NEXT QUESTION:
    if [ $path_to_feature == 'YES' ]; then
        echo 'Please provide folder and/or feature name(TC name) > '
        echo Path: /$folder/...
        echo '> '
        read feature_path
    elif [ $path_to_feature == 'NO' ]; then
        #Navigate to 'enterprise-wdiov5' folder
        cd ./tests/$folder
        # k will be used for navigating back to root forlder of application.
        k=2
        while [[ ! $folder1 =~ 'js' ]]; do
            data1=$(ls)
            arr1=(${data1// / })
            echo 'Available folder or feature file name itself:'
            PS3='Please Select folder or feature file name itself > '
            select option3 in "${arr1[@]}"
            do
                if [[ $option3 != 'Quit' ]]; then
                folder1=$option3
                else
                    exit
                fi
                break
            done
            echo ' '
            if [[ ! $folder1 =~ 'js' ]]; then
                cd $folder1
                # echo '**** Selected folder: ' $folder1
                j=$(($j+1))
            else 
                echo '**** Selected feature TC: ' $folder1
                echo ' '
            fi
            path+=($folder1)
            # echo '**** DATA_PATH: ' ${path[@]}
        done
        feature_path=$(echo ${path[@]} | tr ' ' '/')
        # echo '**** TC Path: ' $feature_path
        #Switch back to 'enterprise' folder
        loop_value=$(($j+$k))
        for ((i = 0 ; i < $loop_value ; i++)); do
            cd ..
        done 
    else 
        echo 'Termination execution ...'
        exit
    fi
else
    #Ask an Engineer about test suite name
    echo ' '
    echo NEXT QUESTION:
    PS3='SELECT NAME OF TEST SUITE: > '
    select option4 in smoke functional EXIT
    do
        if [[ $option4 != 'EXIT' ]]; then
            testSuiteName=$option4
        else
            exit
        fi
        break
    done
fi

#Set maxInstances
if [[ $type == 'safari' ]]; then
    max_inst='1'
else 
    max_inst='5'
fi

# Executing/running feature/TC
if [[ $folder == 'ui-smoke' ]] || [[ $folder == 'ui-functional' ]]; then 
    MAX_INST=$max_inst BROWSER=$type ./node_modules/.bin/wdio ./config/wdio.conf.local.js --spec ./tests/$folder/$feature_path
elif  [[ $folder == '--suite' ]]; then
    MAX_INST=$max_inst BROWSER=$type ./node_modules/.bin/wdio ./config/wdio.conf.local.js --suite $testSuiteName
else 
    echo 'Termination execution ...'
    exit
fi