/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import Comment from './component/Comment';
import CommentList from './component/CommentList'
import AddPractice from './component/AddPractice';
import back from './산과들.jpg'

function App() {
  return (
    <div className='App'>
      <CommentList/>
      {/* <div className='back'></div> */}
      {/* <div style={{backgroundImage : 'url(./산과들.jpg)' , height : '400px'}}></div> 이렇게는 안됨*/}
      <div style={{backgroundImage : 'url(' + back +')' , height : '400px'}}></div>
      <div style={{backgroundImage : `url(${back})` , height : '400px'}}></div>
      {/* 퍼블릭에 넣었을때 이미지 주의 구글에  create react app */}
      <img src={process.env.PUBLIC_URL + 'logo512.png'} />;
      <img src={process.env.PUBLIC_URL + 'logo512.png'} />;
      {/* //이미지 경로만 변경 */}

      <div style={{backgroundImage : 'url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjRfNjMg%2FMDAxNjcxODYyNTQwODUz.nE5BqYAy6Clb9hm2CVcY4waAS0k8zOZp3JTGxXWX0S4g.Iv5khWpUnq6YqQfX_I8FC_EfKlR-NpARdP3MmYev_9og.JPEG.glhd%2Foutput_2973002340.jpg&type=sc960_832)' , height : '400px'}}></div>
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjRfNjMg%2FMDAxNjcxODYyNTQwODUz.nE5BqYAy6Clb9hm2CVcY4waAS0k8zOZp3JTGxXWX0S4g.Iv5khWpUnq6YqQfX_I8FC_EfKlR-NpARdP3MmYev_9og.JPEG.glhd%2Foutput_2973002340.jpg&type=sc960_832" alt="" />
      <img src={back} alt="" />
    </div>
  );
}

export default App;