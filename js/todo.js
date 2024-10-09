document.addEventListener("DOMContentLoaded", () => {
  const $todoList = document.querySelector('.todo>.list');
  let editTodoId = null;

  const $frmTodoAdd = document.querySelector('.todo form[name=frmTodoAdd]');
  const $frmTodoEdit = document.querySelector('.todo form[name=frmTodoEdit]');
  const $addTaskInput = $frmTodoAdd.lastElementChild;
  const $editTaskInput = $frmTodoEdit.lastElementChild;

  let state = {
    todos: JSON.parse(localStorage.getItem('todoState'))?.todos || [],
    nextTodoId: JSON.parse(localStorage.getItem('todoState'))?.nextTodoId || 1
  };

  const saveStateFn = () => {
    localStorage.setItem('todoState', JSON.stringify(state));
  };

  const reRenderTodoFn = () => {
    while ($todoList.childElementCount > 0) {
      $todoList.removeChild($todoList.firstElementChild);
    }

    state.todos.forEach(todo => {
      const $li = document.createElement('li');
      $li.id = todo.id;

      const $h3 = document.createElement('h3');
      $h3.textContent = todo.tit;

      const $chk_i = document.createElement('i');
      if (todo.complete) {
        $h3.classList.add('complete');
        $chk_i.classList.add('insert', 'fas', 'fa-check-square');
      } else {
        $h3.classList.remove('complete');
        $chk_i.classList.add('insert', 'far', 'fa-square');
      }

      const $edit_i = document.createElement('i');
      $edit_i.classList.add('fas', 'fa-edit');

      const $del_i = document.createElement('i');
      $del_i.classList.add('del', 'fas', 'fa-times-circle');

      $li.append($chk_i, $h3, $edit_i, $del_i);
      $todoList.appendChild($li);
    });

    document.querySelectorAll('.todo>.list .insert').forEach($chkIcon => {
      $chkIcon.addEventListener('click', (evt) => {
        editTodoId = parseInt(evt.currentTarget.parentElement.id);
        state.todos = state.todos.map(todo => (editTodoId === todo.id) ? {...todo, complete: !todo.complete} : todo);
        saveStateFn();
        reRenderTodoFn();
      });
    });

    document.querySelectorAll('.todo>.list .fa-edit').forEach($editIcon => {
      $editIcon.addEventListener('click', (evt) => {
        $frmTodoAdd.classList.remove('on');
        $frmTodoEdit.classList.add('on');
        editTodoId = parseInt(evt.currentTarget.parentElement.id);
        const idx = state.todos.findIndex(todo => todo.id === editTodoId);
        $editTaskInput.value = state.todos[idx].tit;
        $editTaskInput.focus();
      });
    });

    document.querySelectorAll('.todo>.list .del').forEach($delIcon => {
      $delIcon.addEventListener('click', (evt) => {
        const $li = evt.currentTarget.parentElement;
        $li.remove();
        state.todos = state.todos.filter(todo => todo.id !== parseInt($li.id));
        saveStateFn();
        reRenderTodoFn();
      });
    });
  };

  reRenderTodoFn();

  $frmTodoEdit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const tit = $editTaskInput.value.trim();
    if (tit === '' || tit === null) {
      alert('Todo 제목을 입력해 주세요');
      $editTaskInput.focus();
      return;
    }
    state.todos = state.todos.map(todo => todo.id === editTodoId ? {...todo, tit} : todo);
    saveStateFn();
    $frmTodoAdd.classList.add('on');
    $frmTodoEdit.classList.remove('on');
    $addTaskInput.focus();
    reRenderTodoFn();
  });

  $frmTodoAdd.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const tit = $addTaskInput.value.trim();
    if (tit === '' || tit === null) {
      alert('Todo 제목을 입력해 주세요');
      $addTaskInput.focus();
      return;
    }
    const newTodo = {
      id: state.nextTodoId,
      tit,
      complete: false
    };
    state.todos.push(newTodo);
    state.nextTodoId += 1;
    saveStateFn();
    reRenderTodoFn();
    $addTaskInput.value = '';
  });
});