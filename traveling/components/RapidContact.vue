<template>
  <div class="tm-section tm-section-pad tm-bg-img tm-position-relative" id="tm-section-6">
                <div class="container ie-h-align-center-fix">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-7 text-center">
                            <img src="@/assets/img/contact.png" alt="">
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 mt-3 mt-md-0">
                            <div class="tm-bg-white tm-p-4">
                                <form action="index.html" method="post" class="contact-form">
                                    <div class="form-group">
                                        <input v-model="name" type="text" id="contact_name" name="contact_name" class="form-control" placeholder="Name"  required/>
                                    </div>
                                    <div class="form-group">
                                        <input v-model="email" type="email" id="contact_email" name="contact_email" class="form-control" placeholder="Email"  required/>
                                    </div>
                                    <div class="form-group">
                                        <input v-model="subject" type="text" id="contact_subject" name="contact_subject" class="form-control" placeholder="Subject"  required/>
                                    </div>
                                    <div class="form-group">
                                        <textarea v-model="message" id="contact_message" name="contact_message" class="form-control" rows="9" placeholder="Message" required></textarea>
                                    </div>
                                    <button @click.prevent="sendMessage" type="submit" class="btn btn-primary tm-btn-primary">Send Message Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "RapidContact",
   data(){
    return{
      name:"",
      email:"",
      subject:"",
      message:""
    }
  },
  methods:{
    async sendMessage(){
      let userMessage = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };
    const validatedEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
        this.email);
      if (
        userMessage.name !== "" &&
        userMessage.email !== "" &&
        userMessage.message !== "" &&
        userMessage.subject !== "" &&
        validatedEmail
      ) {
      try{
      await this.$fireStore.collection('Contact').add(userMessage)
      Swal.fire('Send success!')
      this.cleanForm()
      }catch(err){}
         return;
    }
     Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill in all fields correctly!"
        });

  },
       cleanForm(){
      this.name = ""
      this.email = ""
      this.message = ""
      this.subject = ""
    }
}

}
</script>

<style>

</style>
