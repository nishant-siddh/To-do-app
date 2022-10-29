const input_value = document.getElementById('input_value');
const add_task = document.querySelector('.add_task');
const list = document.getElementById('list');
// let input_task = input_value.value;
// console.log(input_task);

// const arr = [];
// console.log(arr);



// let btnId = 0;
// function func() {
//     const task = input_value.value;

//     let delete_btn = document.createElement('i');
//     delete_btn.className = 'fa fa-close';
//     delete_btn.id = btnId;
//     // console.log('Hello');


//     if (task === '') {
//         alert("You must write something");
//     }
//     else {
//         const obj = {
//             task_input: task,
//             task_btn: delete_btn
//         }
//         let item = document.createElement('li');
//         item.className = 'list_item';
//         // item.innerHTML = obj.task_input;
//         // item.append(delete_btn);
//         // let item = document.createElement('li');
//         // 

//         // arr.push(obj);
//         // console.log(arr);
//         // list.append(item);
//         item.append(obj.task_input);
//         item.append(obj.task_btn);
//         list.append(item);
//         // console.log(delete_btn.className.indexOf("list_item"));
//     }
//     btnId++;
//     // const list_el = arr.map(element => {
//     // })
// }

// add_task.addEventListener('click', func);
// document.addEventListener('click', function(e){
//     console.log(e.target.parentNode.className.indexOf("list_item"));
//     // console.log(e.target.parentNode);
//     //  if (e.target.parentNode.className.indexOf("list_item") >-1){
//     //      console.log("jhakkass");
//     //      e.target.parentNode.remove();
//     //  }
// });






// button_id = 0;
function func() {
    const task = input_value.value;

    // console.log('Hello');


    if (task === '') {
        alert("You must write something");
    }
    else {
        let delete_btn = document.createElement('i');
        delete_btn.id = 'dlt_btn';
        delete_btn.className = 'fa fa-close';

        const obj = {
            task_input: task,
            task_dlt_btn: delete_btn,
            // task_dlt_btn_id: button_id
        }
        let item = document.createElement('li');
        item.className = 'list_item';


        // arr.push(obj);
        // console.log(arr);
        // list.append(item);
        item.append(obj.task_input);
        item.append(obj.task_dlt_btn);
        console.log(item);
        // list.append(arr[Object]);
        list.append(item)

        // console.log(obj.task_dlt_btn_id);
        // button_id++;
    }
    // const list_el = arr.map(element => {
    // })


    input_value.focus();
}

add_task.addEventListener('click', func);

document.addEventListener('click', function (e) {
    let index = e.target.parentNode;
    if (e.target.id.indexOf('dlt_btn') > -1) {
        e.target.parentNode.remove();
        // arr.splice(index,1);
    }

});

// const output = arr.map((element) => function(e){
//     if(e.target.element.id > -1){
//         console.log("Hello");
//     }
// });

// output;