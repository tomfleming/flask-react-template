from flask import Blueprint, render_template

bp = Blueprint('root', __name__, '/')


@bp.route('/')
def hello():
    return 'Hello there flask user!'

@bp.route('/spa')
def load_spa():
    return render_template('index.html')
