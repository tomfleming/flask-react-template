import os

from flask import Flask


def create_app():
    ui_folder = os.environ['UI_FOLDER']
    app = Flask(__name__,
                static_url_path='',
                static_folder=ui_folder,
                template_folder=ui_folder)

    from .hello import bp
    app.register_blueprint(bp)
    return app
