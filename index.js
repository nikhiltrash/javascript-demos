import { Observable } from 'rxjs';
import { pluck, map, filter } from "rxjs/operators";

const users = {
    data: [
        {
            id: 1,
            status: "active",
            age: 14,
        },
        {
            id: 1,
            status: "inactive",
            age: 12,
        },
        {
            id: 1,
            status: "active",
            age: 42,
        },
        {
            id: 1,
            status: "inactive",
            age: 42,
        },
        {
            id: 1,
            status: "active",
            age: 13,
        },
        {
            id: 1,
            status: "inactive",
            age: 75,
        },
        {
            id: 1,
            status: "inactive",
            age: 43,
        },
        {
            id: 1,
            status: "inactive",
            age: 54,
        },
        {
            id: 1,
            status: "active",
            age: 7,
        },
        {
            id: 1,
            status: "active",
            age: 17,
        },
    ],
};

const observable = new Observable((subscriber) => {
    subscriber.next(users)
    subscriber.next(users)
    subscriber.next(users)
}).pipe(
    map((value) => {
        // console.log("1) Data from Observable", value)
        return value.data
    }),
    map((value) => {
        // console.log("2) Data from 1st Operator", value)
        return value.filter((user) => user.status === 'active');
    }),
    map((value) => {
        // console.log("3) Data from 2nd Operator", value)
        return value.reduce((sum, user) => sum + user.age, 0);
    }),
    map((value) => {
        // console.log("4) Data from 3nd Operator", value)
        if (value < 90) throw new Error("Average age is too less")
        else return value;
    }),
)

const observer = {
    next: (x) => console.log("Observer got a next value: " + JSON.stringify(x, null, 2)),
    error: (err) => console.error("Observer got an error: " + err),
    complete: () => console.log("Observer got a complete notification"),
};

observable.subscribe(observer);