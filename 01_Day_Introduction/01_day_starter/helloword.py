from typing import List


def filter_range(nums: List[int], a: int, b: int) -> List[int]:
    return list(filter(lambda x: a <= x <= b, nums))


def TestFilterRange():
    print(filter_range([5, 3, 8, 1], 1, 4))
    arr = [5, 2, 1, -10, 8]
    print(sorted(arr, key=lambda x: -x))
    john = {"name": "John", "age": 25}
    pete = {"name": "Pete", "age": 30}
    mary = {"name": "Mary", "age": 28}
    users6 = [john, pete, mary]
    print([item["name"] for item in users6])

    salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    }
    print("sum:", sum(salaries.values()))

    options = {
        "title": "Menu",
        "height": 200,
        "width": 100
    }
    title, *rest = options
    print("rest:", rest)


def TestDict():
    d = dict()
    d[1] = "1"
    print(d.get(1))
    d["1"] = "one"
    print(d.get("1"))


def main():
    TestFilterRange()
    TestDict()


if __name__ == "__main__":
    main()
