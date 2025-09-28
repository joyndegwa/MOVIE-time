document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector("#movie-list ul")
    const forms = document.forms
    const inputs=document.querySelectorAll(".task")
    const edits=document.querySelectorAll(".edit")
    const spans=document.querySelectorAll(".name")
    const save_btn=document.querySelectorAll(".save")
    edits.forEach((edit,index)=>{
        edit.addEventListener("click",()=>{
            let text=spans[index].innerText
            save_btn[index].style.display="inline"
            inputs[index].value=text;
            inputs[index].style.display="inline"
            spans[index].style.display="none"
            edit.style.display="none"
           save_btn[index].addEventListener("click",()=>{
            spans[index].innerText=inputs[index].value
            spans[index].style.display="inline"
            inputs[index].style.display="none"
            save_btn[index].style.display="none"
            edit.style.display="inline"
           })
        })
    })

    // delete movies
    list.addEventListener("click", function (e) {
        if (e.target.className == 'delete') {
            const div = e.target.parentElement;
            const li=div.parentElement
            console.log(li)
            li.parentNode.removeChild(li);
        }
    })

    //add movie
    const addMovieForm = forms['add-movie']
    addMovieForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // create elements
        const value = addMovieForm.querySelector('input[type="text"]').value;

        // check if the input is empty
        if (!value) {
            alert("Please enter a movie name!");
            return;
        }


        const li = document.createElement('li');
        const movieName = document.createElement('span')
        const deleteBtn = document.createElement('span')

        // adding content
        movieName.textContent = value;
        deleteBtn.textContent = 'Delete';

        // adding classes
        movieName.classList.add('name');
        deleteBtn.classList.add('delete');

        // append to DOM
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
        // reset the form
        addMovieForm.reset();
    })

})
