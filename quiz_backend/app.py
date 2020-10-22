from flask import Flask, render_template, request, redirect
from flask_socketio import SocketIO
import json

with open('screens.json', 'r') as f:
    screens = json.load(f)

app = Flask(__name__)
app.config['SECRET_KEY'] = 'TEMP_KEY'
socketio = SocketIO(app, cors_allowed_origins='*')

# Key: player name, Value: dictionary of answers
playerAnswers = {}

currentScreen = "lobby"


@socketio.on('connection')
def handleConnect():
    print('Client connected')


@socketio.on('disconnect')
def handleDisconnect():
    print('Client disconnected')


@socketio.on('login')
def handleLogin(playerName):
    playerAnswers.setdefault(playerName, {})
    socketio.emit(
        'logged_in', {'playerName': playerName, 'screenRef': currentScreen, 'screen': screens[currentScreen]})


@ socketio.on('submit_answers')
def handleSubmitAnswers(data):
    playerName = data["playerName"]
    screenRef = data["screenRef"]
    answers = data["answers"]
    playerAnswers.setdefault(playerName, {})
    playerAnswers[playerName].setdefault(screenRef, {})
    playerAnswers[playerName][screenRef] = answers


def handleScreenChange(screenRef):
    # Hate this hate this hate this, will change later
    global currentScreen
    currentScreen = screenRef
    socketio.emit(
        'set_screen', {'screenRef': screenRef, 'screen': screens[screenRef]})


@ app.route('/admin', methods=['GET', 'POST'])
def admin():
    if request.method == 'POST':
        handleScreenChange(request.form['screen'])
        return redirect(request.url, 303)
    players = playerAnswers.keys() if playerAnswers else {}
    return render_template('admin.html', screens=screens, currentScreen=currentScreen, players=players)


@ app.route('/answers/<playerName>')
def players(playerName):
    return render_template('answers.html', player=playerName, answers=playerAnswers[playerName])


if __name__ == '__main__':
    socketio.run(app, debug=True)
