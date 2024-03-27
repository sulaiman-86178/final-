const navigation=document.querySelector('ul');
const button=document.querySelector('.butt');
button.addEventListener('click',function() {
const visibility=navigation.getAttribute('data-visible');
console.log(visibility);
if(visibility==="false"){
  const visibility=navigation.setAttribute('data-visible',true);

}
else if(visibility==="true"){
    const visibility=navigation.setAttribute('data-visible',false);
}

});
