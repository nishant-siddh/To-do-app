const input_value = document.getElementById('input_value');
const add_task = document.querySelector('.add_task');
const list = document.getElementById('list');

function func() {
    const task = input_value.value;

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
        }
        let item = document.createElement('li');
        item.className = 'list_item';


        item.append(obj.task_input);
        item.append(obj.task_dlt_btn);
        console.log(item);
        list.append(item)

    input_value.focus();
}

add_task.addEventListener('click', func);

document.addEventListener('click', function (e) {
    let index = e.target.parentNode;
    if (e.target.id.indexOf('dlt_btn') > -1) {
        e.target.parentNode.remove();
    }

});
