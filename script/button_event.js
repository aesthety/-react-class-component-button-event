/*
1. 클래스형 컴포넌트 (파스칼케이스 네이밍 규칙)
2. 버튼 이벤트
    선택.버튼등록
    선택자안에서 인라인형식으로 코딩가능 : 반드시 화살표함수사용!
    클릭이벤트
    반드시 카멜케이스 네이밍규칙
    onClickt ={()=>{}}
3. 상태관리
this.state()  : 상태를 멤버변수를 통해 관리(객체로됨), state는 반드시 앞에 this가 붙는데, constuctor(생성자) 때문.
setState() : 상태를 변경함
constructor(){}내부에 super();는 그 안에서 this를 사용할 수 있게 함
*/


class AppComponent extends React.Component {
  // 클래스의 루트영역
  static defaultProps ={
    // 컴포넌트 내부에서 :  객채내부에서 사용하는 props 모아서 값을 바꿀수 없는 상수형 정적변수를 쓸때 이런방식으로 쓴다
    title : 'AppComponent 타이틀!!!'
  }

  // 상태관리
  constructor(){
    super();
    this.state ={
      //배열, 멤버변수 등 다양한걸 작성할 수 있다. 
      //아래에서 값을 변경할 때 이렇게 상태관리함
      arr : [],
      cnt : 0,
      title2 : '상태관리에서 타이틀 입니다'
    }
  }

  // 변수선언없이 함수를 this로 호출
  onClickEventThis = (e)=>{
    e.preventDefault();
    alert('버튼 4 클래스 컴포넌트 루트영역에서 함수 호출 방식 : 반드시 this로 호출');
  }
  render() {
    // 렌더함수 영역    
    // 구조분할 할당(비구조와)
    const {title} = this.props;

    // const 변수로 선언하여 함수 호출
    const onClickEvent = (e)=>{
      e.preventDefault();
      alert('버튼3 함수 호출 이벤트');
    }
    
    // 비구조화 : this.props.title를 title만 쓰기 위해 함.

    // 렌더와 리턴문 사이에 쓰거나 렌더 내부 맨 위에 쓴다. 
    return (
      <div id="app">
        {/* <h1>클래스형 앱 컴포넌트 {this.props.title}</h1> */}
        <h1>클래스형 앱 컴포넌트 프롭스 멤버변수 {title}</h1>
        <h2>클래스형 앱 컴포넌트 상태 멤버변수 {this.state.title2}</h2>
        

        <button onClick={() => {alert('버튼1클릭 이벤트'); }}>버튼1</button>
        <button
          onClick={
            (e) => {
              e.preventDefault();
              alert('버튼2클릭 이벤트');
            }
          }
        >버튼2</button>
        {/* 3. 버튼이벤트 함수 이름만 작성하여 생성하고, 렌더함수안에 호출하는 방식, 
        render와 return사이에 화살표함수로 작성,
        반드시 모든 변수 선언을 한다.  */}
        <button onClick={onClickEvent}>버튼3</button>
        {/* 4. 클래스형 컴포넌트 루트영역에서 가져오기 때문에 this(즉, AppComponent)를 사용하여 함수를 호출하는 방식 */}
        <button onClick={this.onClickEventThis}>버튼4</button>
      </div>
    );
  }
}
// 컴포넌트 밖에 props선언할때 아래같이 씀
// AppComponent.defaultProps ={
//   title : 'AppComponent 타이틀!!!'
// }

ReactDOM.render(
  <AppComponent />,
  document.getElementById('root')
);


