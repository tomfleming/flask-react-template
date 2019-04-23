"""
For guidance on setup.py options, see:
https://github.com/pypa/sampleproject/blob/master/setup.py
"""

from setuptools import setup
from os import path

here = path.abspath(path.dirname(__file__))

# Get the long description from the README file
with open(path.join(here, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()

setup(
    name='flask-react',
    version='1.0.0',
    description='A sample Flask/React project',
    url='https://github.com/pypa/sampleproject',
    author='Tom Fleming',
    author_email='tomdfleming@gmail.com',
    long_description=long_description,  # Optional
    long_description_content_type='text/markdown',

    package_dir={'': 'src'},
    packages=['app'],

    python_requires='>=3.7',
    install_requires=['flask'],
)
