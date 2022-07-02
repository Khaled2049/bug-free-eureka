from turtle import pos
from fastapi import FastAPI, status, HTTPException
from pydantic import BaseModel
from random import randrange

my_posts = [{'title': 'test', 'content': 'content', 'id': 1},
            {'title': 'test2', 'content': 'content2', 'id': 2}]


class Post(BaseModel):
    title: str
    content: str


app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/posts")
async def get_posts():
    return my_posts


@app.post("/posts", status_code=status.HTTP_201_CREATED)
async def create_post(post: Post):
    post_dict = post.dict()
    post_dict['id'] = randrange(0, 1000)
    my_posts.append(post_dict)
    return {'data': post_dict}


@app.get("/posts/{id}")
async def get_post(id: int):
    post = filter(lambda p: p['id'] == id, my_posts)
    if len(list(post)) < 1:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"post with id: {id} not found")
        # response.status_code = status.HTTP_404_NOT_FOUND
        # return {'message': f"post with id: {id} not found"}

    return {"post": list(post)}

# status_code=status.HTTP_204_NO_CONTENT


@app.delete("/posts/{id}")
async def delete_post(id: int):
    for i, p in enumerate(my_posts):
        if p['id'] == id:
            my_posts.pop(i)
            return {'message': 'Post was deleted'}
    return {'message': 'Post with id doesn\'t exists'}
