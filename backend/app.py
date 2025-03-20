from flask import Flask, request, jsonify, redirect
from flask_mysqldb import MySQL
from flask_cors import CORS
from nanoid import generate
import datetime