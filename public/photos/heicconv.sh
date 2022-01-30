
    fileExtension="jpg"

    while getopts :p flag; do
        case ${flag} in
            # -p flag: convert heic files to png format instead
            p) fileExtension="png"
            ;;
        esac
    done

    #look for files in current path that contains ".heic" OR ".HEIC"
    for file in $( find . -name "*.heic" -o -name "*.HEIC" -type f )
    do
        echo "Converting file: $file"
        sedCommand="s/heic/${fileExtension}/g;s/HEIC/${fileExtension}/g"
        #replace original file name by changing the extension from heic to jpg
        outputFileName=`echo $file | sed -e $sedCommand`
        heif-convert $file $outputFileName
    done


