'use strict'

const $ = function(el) {
    let method = (el.indexOf('#') === 0 && el.indexOf(',') < 0) ? 'querySelector' : 'querySelectorAll';
    
    return document[method](el);
}

const validation = (function() {
    return {
        email: (str, pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) => pattern.test(str),

        text: (str, pattern = /^.+$/) => pattern.test(str),

        tel: (str, pattern = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/) => {pattern.test(str)},

        time: (str, pattern = /^\d{2}:\d{2}$/) => pattern.test(str)
    }
}());

const app = (function() {
    let store = [];
    let typeItem = '';
    let index = 0;

    return {
        addItem: function() {
            console.log("Add New Item");
            let inputs = $(`[name=form-${typeItem}]`)[0].elements
            
            if (!this.validate(inputs)) return;

            let item = {
                id: index,
                type: typeItem
            };
            
            for (let i = 0, l = inputs.length; i < l; i++) {
                let el = inputs[i];
                item[el.name] = el.value;
                el.value = '';
            }

            console.log(item)

            store.push(item);
            
            index++;

            this.showList();
        },

        removeItem: function(id) {

            store = store.filter(item => item.id !== id)

            this.showList();
        },

        validate: function(inputs) {
            let res = true;
            for (let i = 0, l = inputs.length; i < l; i++) {
                let el = inputs[i];
                
                if((el.type in validation) && !validation[el.type](el.value)) {
                    res = false;
                    el.classList.add('error');
                } else {
                    el.classList.remove('error');
                }                
            }
            
            return res
        },

        clearApp: function() {
            $(`#button-add, [name=form-contacts], [name=form-persons], [name=form-deals], [name=form-events], #list-todo`).forEach(function(item) {
                item.classList.add('hide');
            })

            if (store.length)  {
                $('#button-list').classList.remove('hide')
            } else {
                $('#button-list').classList.add('hide')
            }

            if(typeItem) {
                let inputs = $(`[name=form-${typeItem}]`)[0].elements;
                for (let i = 0, l = inputs.length; i < l; i++) {
                    let el = inputs[i];
                    el.value = '';
                    el.classList.remove('error')
                }
            }

            typeItem = '';
        },

        selectType: function(type) {
            console.log(`Selected type ${type}`);

            this.clearApp();

            typeItem = type;
            
            if (type) {
                $(`#button-add, [name=form-${type}]`).forEach(function(item) {
                    item.classList.remove('hide');
                })

                $(`[name=form-${type}]`)[0].elements[0].focus()
            }
        },

        fetchList: function() {
            let html = [];

            store.forEach(function(item) {
                let tpl = '';
                switch(item.type) {
                    case 'contacts':
                        tpl = `<div class="todo-item">
                            <div class="todo-item_title">${item.title}</div>
                            <button type="button" class="btn sm todo-item_remove" onclick="app.removeItem(${item.id})">Remove</div>
                        </div>`
                    break;
                    case 'persons':
                        tpl = `<div class="todo-item">
                            <div class="todo-item_title">${item.name}</div>
                            <button type="button" class="btn sm todo-item_remove" onclick="app.removeItem(${item.id})">Remove</div>
                        </div>`
                    break;
                    case 'deals':
                        tpl = `<div class="todo-item">
                            <div class="todo-item_title">${item.title}</div>
                            <button type="button" class="btn sm todo-item_remove" onclick="app.removeItem(${item.id})">Remove</div>
                        </div>`
                    break;
                    case 'events':
                        tpl = `<div class="todo-item">
                            <div class="todo-item_title">${item.title}</div>
                            <button type="button" class="btn sm todo-item_remove" onclick="app.removeItem(${item.id})">Remove</div>
                        </div>`
                    break;
                    default:
                        tpl = `<div class="todo-item">
                            <div class="todo-item_title">${item.title}</div>
                            <button type="button" class="btn sm todo-item_remove" onclick="app.removeItem(${item.id})">Remove</div>
                        </div>`
                    break;
                }

                html.push(tpl);
            });

            return html;
        },

        showList: function() {
            let html = this.fetchList();
            
            $('#list-todo').innerHTML = html.join('');

            this.clearApp();

            $("#select-type").value = '';
            $('#list-todo').classList.remove('hide')
        }
    }

}());