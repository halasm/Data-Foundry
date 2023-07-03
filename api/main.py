from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Union
from database_query import DatabaseQuery


class Filter(BaseModel):
    office: List[str]
    sensitivity: str
    request_process: str
    request_form: str
    frequency: str


class Data(BaseModel):
    data_source: str
    office: str
    poc: str
    sensitivity: Union[str, None]
    freeq: Union[str, None]
    description: str
    icon: str
    uid: str


# app connects to fastapi so is why we say main:app when running uvicorn
app = FastAPI()

# search_filter is the object that stores filters and search_strings
database_query = DatabaseQuery()


# This is our query that sends back info from the database
@app.post('/data-table')
async def get_data_default(filters: Filter) -> List[Data]:
    database_query.update_filters(filters)
    database_query.update_search_string("")
    return database_query.query_filter_and_search()


@app.post('/data-table/{search_string}')
async def get_data(filters: Filter, search_string: str) -> List[Data]:
    database_query.update_filters(filters)
    database_query.update_search_string(search_string)
    return database_query.query_filter_and_search()


@app.get('/data-sources/{source_id}')
async def get_source_id(source_id: int) -> List[Data]:
    return database_query.query_source_id(source_id)


@app.get('/header')
async def get_header_data():
    return {"name": "Ina Ding", "photo": "/images/duke_wordmark_white.png"}
