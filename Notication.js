let successMsg = '<i class="fa-solid fa-check"></i>Submitted Succsessfully.'
let invalidMsg = '<i class="fa-solid fa-ban"></i>  Error Ouccurred!'
let errorMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, Please Check Again.'

function showtoast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('Error')){;
    toast.classList.add('error');
}
if(msg.includes('Invalid')){;
    toast.classList.add('invalid');
}
setTimeout(()=>{
    toast.remove();
},6500);
}