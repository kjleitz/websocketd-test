# websocketd-test

just testin' out websocketd

## install

for macOS:

```
brew install websocketd
```

(for Windows or Linux, see https://github.com/joewalnes/websocketd#download)

you're also going to need python 2.x/3.x, so grab that if it's not already installed on your machine

grab this repo and get on in there:

```
git clone https://github.com/kjleitz/websocketd-test
cd websocketd-test
```

## run

### option #1: using `start.sh`

run the provided start script:

```
./start.sh
```

now, navigate to `http://localhost:8000`—you're all set

### option #2: run manually

start up websocketd with `capitalize.py`:

```
websocketd --port=8080 ./capitalize.py
```

now, either open up `index.html` in a browser. Or, if you need other content served, in a separate terminal session run:

```
python -m SimpleHTTPServer 8000
```

...and open up `http://localhost:8000` in a browser.

(`start.sh` just would have started both of those processes for you)
