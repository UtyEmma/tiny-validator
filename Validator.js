export class Validator {

    validate = [];
    response = [];
    values = {};
    checker = 0;

    validator(validationData){
        this.values = validationData;
        let items = this.values.items;

        if(this.values.onInit){
            this.executeAction(this.values.onInit);    
        };

        items.forEach(item => {
            this.checkValidation(item);
            this.response.push(this.validate);
            this.validate = [];
        });
        
        if(this.values.onEnd){
            this.executeAction(this.values.onEnd);    
        };

        this.checker === 0 ? this.response.valid = true : this.response.valid = false

        return this.response;
    }

    checkValidation(item){
        let types = item.types;
        let value = item.value;
        let user_input = item;

        for (let i = 0; i < types.length; i++) {
            switch (types[i]) {
                case 'empty':
                    value !== '' ?  this.validate.empty = 'Empty Okay' : this.displayErrors(user_input, 'empty', i); 
                    break;
                case 'email':
                    value === 'utyemma@gmail.com' ? this.validate.email = 'Email Okay' : this.displayErrors(user_input, 'email', i);
                    break;
                case 'password':
                    value === 'utyemma' ? this.validate.password = 'Password Valid' : this.displayErrors(user_input, 'password', i);
                    break;
                default:
                    break;
            }            
        }
    }

    displayErrors(item, type, i){   
        switch (type) {
            case 'empty':
                this.values.message.empty ? this.validate[i] = this.values.message.empty : this.validate[i] = item.name+' is Required';        
                break;
            case 'email':
                this.values.message.email  ? this.validate[i] = this.values.message.email : this.validate[i] = item.name+' Must be an Email';        
                break;

            case 'password':
                this.values.message.password  ? this.validate[i] = this.values.message.password : this.validate[i] = item.name+' Must be a password';        
                break;
        
            default:
                break;
        }
        this.checker = 1;
        
    }

    executeAction(item){
        item();   
    }

    styleErrorMessage(message, type){
        switch (type) {
            case 'empty' :

                break;
        }
    }

}

let validate = new Validator();

