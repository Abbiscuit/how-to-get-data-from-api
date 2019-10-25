## How to get data from API

1. axios を使って API を取得

2. react-router-dom を使用し、**match**を使用して id を取得

3. 詳細ページ（この場合 User.jsx コンポーネント内）で`componentDidMount()`。末尾に\${id}を指定し、該当のデータを取得するようにする。
