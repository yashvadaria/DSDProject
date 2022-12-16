from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from T1 import *

app = FastAPI()

origins = ["*"]

# Handling CORS Policy
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/get")
async def addUser(info: Request):
    return executeMpi(await info.json())
