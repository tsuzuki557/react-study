// axiosでapiデータ取得し、表示

import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  title: string;
  author: string;
};

const GetData = () => {
  const [users, setUsers] = useState<User[]>([]);

  // （axios）非同期通信を伴う副作用があるものはuseEffect内で記述する
  useEffect(() => {
    // 【thenでつなげて取得】
    // axios.get("http://localhost:3300/posts").then((res) => {
    //   console.log(res.data);
    // });

    // 【async,awaitで取得】
    // useEffectのコールバック関数にはasyncをつけることができないので、新たに関数を作成して対応する。
    const getUser = async () => {
      const res = await axios.get("http://localhost:3300/posts");
      //console.log(res.data[0]);
      setUsers(res.data);
    };
    getUser();
  }, []);

  return (
    <>
      {/* {console.log(users)} */}
      {users.map((user) => {
        return (
          <ul key={user.id}>
            <li>ID: {user.id}</li>
            <li>タイトル: {user.title}</li>
            <li>著者: {user.author}</li>
          </ul>
        );
      })}
    </>
  );
};

export default GetData;
