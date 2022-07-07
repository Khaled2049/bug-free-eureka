from datetime import date
from fastapi import FastAPI, status, HTTPException
from pydantic import BaseModel
from random import randrange
import psycopg2
from psycopg2.extras import RealDictCursor
import time

class Post(BaseModel):
    title: str
    content: str

class Student(BaseModel):
    fname: str
    lname: str
    dob: str    
    phone: str    
    
while True:
    try:
        conn = psycopg2.connect(host="localhost", database="school", user="postgres", password="", cursor_factory=RealDictCursor)

        # Open a cursor to perform database operations
        cur = conn.cursor()
        print('successfully connected to db')
        break
    except Exception as error:
        print('Error connecting to db')
    time.sleep(2)
    
app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/students")
async def get_students():
    cur.execute("""SELECT * FROM student""")
    students = cur.fetchall()
    return students


@app.post("/students", status_code=status.HTTP_201_CREATED)
async def create_student(student: Student):
    cur.execute("""INSERT INTO student (fname, dob, phone, lname) values (%s,%s,%s,%s) RETURNING * """, (student.fname, student.dob, student.phone, student.lname))
    new_student = cur.fetchone()
    conn.commit()
    return new_student


@app.get("/students/{sid}")
async def get_student_with_id(sid: int):
    cur.execute("""SELECT * from student where sid = %s """, (str(sid),))
    student = cur.fetchone()
    if not student:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Post with id: {sid} not found")
    return student


@app.delete("/students/{sid}")
async def delete_post(sid: int):
    cur.execute("""DELETE FROM student WHERE sid=%s returning *""",(str(sid),))
    dead_student = cur.fetchone()    
    if dead_student == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"student with {sid} doesn't exist. Yo!")
    conn.commit()
    return dead_student

@app.put("/students/{sid}")
async def update_student(sid: int, student: Student):
    cur.execute("""UPDATE student SET fname = %s, lname = %s, dob = %s, phone = %s WHERE sid = %s RETURNING *""", (student.fname, student.lname, student.dob, student.phone, str(sid),))
    student = cur.fetchone()
    conn.commit()
    if not student:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Student with id: {sid} not found")
    return update_student
    