## Basic Algorithm Test
### Task 1
```
// In PHP programming language

function findUniqueNumbers($collection) {
  $dictionary = [];
  foreach ($collection as $number) {
      if (!isset($dictionary[$number])) {
          $dictionary[$number] = 1;
      } else {
          $dictionary[$number]++;
      }
  }
  
  $output = [];
  foreach ($dictionary as $number => $count) {
      if ($count == 1) {
          $output[] = $number;
      }
  }
  return $output;
}
```

### Task 2
```
// In PHP programming language

function findMaxSum($input) {
  $output = 0;
  rsort($input);
  if (count($input) >= 2) {
    $output = $input[0] + $input[1];
  }
  
  return $output;
}
```

## Java Engineer Test

### Task 1
- What data structure and search/matching algorithm to use and why?
  - In RDMS Using full text search index, because the algorithm are tokenize the text and indexing the text data

- How fast the search is using this algorithm and data structure?
  - It will more faster than non indexed data

- Additional approaches from any point of view are acceptable to achieve best
  - Caching, page that do not changed often could use caching like Redis, so the system will not query to database directly
  - Pagination, to make performance more faster, we need to make server side pagination
