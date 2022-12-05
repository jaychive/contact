document.querySelector('.selectBox').addEventListener('click', function (e) {
  document.querySelector('.selectUl').classList.toggle('down');
  document.querySelector('.selectCaret').classList.toggle('rotateCaret');
});

const selectList = document.querySelectorAll('.selectUl > li');

selectList.forEach((value, index) => {
  value.addEventListener('click', function (e) {
    if(index == (selectList.length - 1)){
      document.querySelector('.selectDiv').innerHTML = `<input type="text" class="form-control formline" id="selectedEmail" aria-describedby="selectedEmail" class="pretendard lh-1" placeholder="@email.com" required />`
    } else {
      document.querySelector('.selectBox').innerHTML = e.target.textContent;
    }
  });
});

// document.querySelector('.submitBtn').addEventListener('click', function(){
//   document.querySelectorAll('input').forEach((v,index)=>{
//     v.addEventListener('invalid', function () {
//       alert("입력해주세요");
//     })
//   });
// });

// document.querySelectorAll('.formline').forEach((value, index)=>{
//   if(value.focus()){
//     e.target.children.classList.remove('line');
//     e.target.classList.add('line');
//   };
// });