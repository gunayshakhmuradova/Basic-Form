 $.validator.addMethod("phoneRegex", function(value, element) {
     return this.optional(element) || /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(value);
 }, "Please type a valid U.S. Phone Number." );
 
 $('#myform').validate({
    rules : {
        name : 'required',
        email : {
            required : true,
            email : true
        },
        'cheese[]' : {
            required : true,
            minlength : 3,
            maxlength : 3
        },
        phone : {
            required : true,
            phoneRegex : true
        },
        cheesetype: 'required'
    },

    messages: {
        name: 'Please enter your name',
        email: {required: 'You must provide an email address', email: 'A valid email address, please!'},
        'cheese[]' : 'Please select at least 3 cheeses',
        phone: {required: 'You must provide a phone number', phoneRegex: 'Please type a valid U.S. Phone Number.'},
        cheesetype: 'Please select a cheese type'
    },
    errorContainer: '#messagebox',
    errorLabelContainer: '#messagebox ul',
    wrapper: 'li',
    submitHandler: function(form) {
        
    }
 });