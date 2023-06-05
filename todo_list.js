//let todo_list = [];
//let task_date = {};

let todo_list = JSON.parse(localStorage.getItem('array_list')) || [];
let task_date = JSON.parse(localStorage.getItem('object_list')) || {};

function enter(event)
{
  if(event.key === 'Enter')
  {
    add_arr();
  }
}

function add_arr()
{
  let text = document.querySelector('.js_inp');
  let time = document.querySelector('.js_date');
  task_date[`${text.value}`] = {task: text.value, date: time.value};
  console.log(task_date);
  todo_list.push(task_date[`${text.value}`]);
  console.log(todo_list);
  text.value = '';
  time.value = '';
  create_html();
}

function create_html()
{
  let html = '';
  for(let i=todo_list.length-1; i>=0; i--)
  {
    html += `<p class="live_para">
                <span class="span_1">
                  ${todo_list[i].task}
                </span>
                <span class="span_2">
                  ${todo_list[i].date}
                </span>
                <button onclick="todo_list.splice(${i},1);
                                 create_html();"
                                 class="delete_btn gen_btn">
                  Delete
                </button>
             </p> `;
  }
  display(html);
}

function display(html)
{
  let display = document.querySelector('.js_para');
  display.innerHTML = html;
  localStorage.setItem('array_list',JSON.stringify(todo_list));
  localStorage.setItem('object_list',JSON.stringify(task_date));
}