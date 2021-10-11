const showAdminUI = () =>{
  document.querySelector('.inputs-container').classList.remove('hide');

  document.querySelectorAll('.delete-job')
  .forEach(btn => btn.classList.remove("hide"));
}

export default showAdminUI;