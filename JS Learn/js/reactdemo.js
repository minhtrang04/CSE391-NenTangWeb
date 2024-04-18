function Member(){
    return(
      <div className="member">
        <h2>Nguyễn Văn A</h2>
        <p>Tuổi: 25</p>
      </div>
    )
  };

  ReactDOM.render(
    <Member />,
    document.getElementById('member')
  );