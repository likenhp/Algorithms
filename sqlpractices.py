
left_inclusive_query = """
  SELECT * 
  FROM database.persons AS p
  LEFT OUTER JOIN database.candidates AS c
  ON p.user_id = c.user_id
"""

left_exclusive_query = """
  SELECT * 
  FROM database.persons AS p
  LEFT OUTER JOIN database.candidates AS c
  ON p.user_id = c.user_id
  WHERE c.user_id IS NULL
"""

right_inclusive_query = """
  SELECT * 
  FROM database.persons AS p
  RIGHT OUTER JOIN database.candidates AS c
  ON p.user_id = c.user_id
"""

right_exclusive_query = """
  SELECT * 
  FROM database.persons AS p
  RIGHT OUTER JOIN database.candidates AS c
  ON p.user_id = c.user_id
  WHERE p.user_id IS NULL
"""

outer_exclusive_query = """
  SELECT * 
  FROM database.persons AS p
  FULL OUTER JOIN database.candidates AS c
  ON p.user_id = c.user_id
  WHERE p.user_id IS NULL OR c.user_id IS NULL
"""

outer_inclusive_query = """
  SELECT * 
  FROM database.persons AS p
  FULL OUTER JOIN database.candidates AS c
  ON p.user_id = c.user_id
"""

inner_query = """
  SELECT * 
  FROM database.persons AS p
  INNER JOIN database.candidates AS c
  ON p.user_id = c.user_id
"""


