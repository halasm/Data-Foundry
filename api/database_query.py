import psycopg2

# FILTER_QUERIES is a shortcut "map" so we dont have to type everything out if we add new filters
FILTER_QUERIES = {
    "office": "'{}' = ANY(office)",
    "sensitivity": "'{}' = ANY(sensitivity)",
    "request_process": "req_proc = '{}'",
    "request_form": "req_form = '{}'",
    "frequency": "'{}' = ANY(freeq)",
}

SEARCH_QUERIES = {
    "data_source": "LOWER(data_source) LIKE LOWER('%{}%')",
    "poc": "EXISTS (SELECT * FROM unnest(datainv.poc) name WHERE LOWER(name) LIKE LOWER('%{}%'))"
}


class DatabaseQuery:
    def __init__(self):
        self.filters = {
            "filters": {
                "office": ["All"],
                "sensitivity": "All",
                "request_process": "All",
                "request_form": "All",
                "frequency": "All"
            }
        }

        self.search_string = ""

        self.connection = psycopg2.connect(database="data_foundry",
                                           user="data_foundry_user",
                                           password="***REMOVED***",
                                           host="codeplus-postgres-test-01.oit.duke.edu",
                                           port="5432")

        self.cur = self.connection.cursor()

    def create_filter_conditions(self):
        filter_query = []
        for field in FILTER_QUERIES:
            if field == "office":
                office_conditions = [FILTER_QUERIES[field].format(office) if office != "All"
                                     else "1 = 1" for office in getattr(self.filters, field)]
                filter_query.append(f"({' OR '.join(office_conditions)})")
            elif getattr(self.filters, field) != "All":
                filter_query.append(FILTER_QUERIES[field].format(getattr(self.filters, field)))
            else:
                filter_query.append("1 = 1")
        return " AND ".join(filter_query)

    def create_search_conditions(self):
        if self.search_string == "":
            return "1 = 1"

        search_query = []
        for field in SEARCH_QUERIES:
            search_query.append(SEARCH_QUERIES[field].format(self.search_string))
        return f"({' OR '.join(search_query)})"

    def query_filter_and_search(self):
        query = f"SELECT data_source, office, poc, sensitivity, freeq, uid, icon, description FROM datainv \
                WHERE {self.create_filter_conditions()} AND {self.create_search_conditions()}"

        self.cur.execute(query)
        rows = self.cur.fetchall()

        return [{
            "data_source": row[0],
            "office": row[1].replace("{", "").replace("}", ""),
            "poc": str(row[2]).replace("[", "").replace("]", "").replace("'", ""),
            "sensitivity": row[3].replace("{", "").replace("}", ""),
            "freeq": str(row[4]).replace("{", "").replace("}", ""),
            "uid": row[5],
            "icon": row[6],
            "description": row[7]
        } for row in rows]

    def query_source_id(self, source_id):
        self.cur.execute("SELECT data_source, office, poc, sensitivity, freeq, uid, \
                         icon, description FROM datainv WHERE uid = %s;", (source_id,))
        rows = self.cur.fetchall()

        return [{
            "data_source": row[0],
            "office": row[1].replace("{", "").replace("}", ""),
            "poc": str(row[2]).replace("[", "").replace("]", "").replace("'", ""),
            "sensitivity": row[3].replace("{", "").replace("}", ""),
            "freeq": str(row[4]).replace("{", "").replace("}", ""),
            "uid": row[5],
            "icon": row[6],
            "description": row[7]
        } for row in rows]

    def update_filters(self, filters):
        self.filters = filters

    def update_search_string(self, search_string):
        self.search_string = search_string.strip(" ")
