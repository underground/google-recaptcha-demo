
function deploy() {
  echo "Start deploy"
  gcloud app deploy
  echo "Finished deploy"
}

echo "--------------------------------------------"
gcloud config list
if [ "$?" -ne 0 ]
then
    exit "$?"
fi

echo -e "--------------------------------------------\n"
echo "Are you ready? [Y/n]"
read answer
case $answer in
    y|yes|Y|YES)
        deploy
        ;;
    *)
        echo -e "Cancel deploy.\n"
        ;;
esac
