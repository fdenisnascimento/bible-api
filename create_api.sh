
if [ -z "$1" ]
  then
    echo "add name to module"
fi

echo "criando module: $1";
nest g resource $1 --no-spec