<script setup>
  import linkedIn from '@/assets/img/icon-linkedin-2x.png';

  defineProps({
    showModal: {
      type: Boolean,
      required: true
    }
  });
  
  const emit = defineEmits(['close'])

  function close() {
    emit('close')
  }
</script>

<template>
  <transition name="modal-fade">
    <div v-if="showModal" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <div class="row-contact">
          <div class="col-info">
          
            <div class="img-row">
              <img src="@/assets/img/forest.gif" alt="" class="forest" />
              <img src="@/assets/img/txt-say-hello.svg" alt="Say Hello"  class="say-hello"/>
            </div>

            <div class="contact-info">
              <ul>
                <li><strong>Jason (JB) Bellinger</strong></li>
                <li>VP, Associate Creative Director</li>
                <li>Graphic Design + UI + Experiential</li>
                <li class="linkedin">
                  <a href="https://www.linkedin.com/in/jasonbellinger/" target="_blank">
                    <img :src="linkedIn" alt="Linkedin">
                  </a>
                </li>
                <li><strong>Mobile:</strong> 917.494.6885</li>
                <li><strong>Email:</strong> <a href="mailto:jason@jbellinger.com">jason@jbellinger.com</a></li>
                <li>New York/New Jersey</li>
              </ul>
            </div>
          </div>
          <div class="col-form">
            <button @click="close" id="btn-close">
              <span>Close</span>
              <img src="@/assets/img/icon-close-circle-white.svg" alt="Close" />
            </button>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <input type="text" v-model="name" class="form-control" required />
                <label for="name">First/Last Name*</label>
              </div>
              <div class="form-group">
                <input type="email" v-model="email" class="form-control" required />
                <label for="email">Email*</label>
              </div>
              <div class="form-group">
                <input type="phone" v-model="phone" class="form-control" required />
                <label for="phone">Phone*</label>
              </div>
              <div class="form-group">
                <input type="subject" v-model="subject" class="form-control" required />
                <label for="subject">Subject*</label>
              </div>
              <div class="form-group">
                <textarea v-model="message" rows="7" required></textarea>
                <label for="message">Message*</label>
              </div>
              <button type="submit" id="btn-submit">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s cubic-bezier(0.4, 0, 0.2, 1);
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
}

.modal-content {
  background: $white;
  min-width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: auto;
}

.row-contact {
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 0; // Important for flex children
  height: 100%;
  justify-content: space-between; 

  .col-info {
    flex: 1;
    background-color: $white;
    position: relative;

    .img-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding-top: 50px;
    }

    .forest {
      width: 100%;
      max-width: 400px;
      z-index: 888;
    }
    .say-hello {
      width: 100%;
      max-width: 520px;
      z-index: 999;
      margin-left: -35px;
      margin-top: 60px;
    }
    .contact-info {
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0 130px 0 0;
        font-size: 18px;
        line-height: 26px;
        text-align: right;
        &:after {
          content: '';
          width: 90px;
          height: 4px;
          background-color: $purple;
          display: block;
          margin-top: 20px;
          margin-left: auto;
        }
        .linkedin {
          padding: 20px 0;
          img {
            width: 40px;
          }
        }
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      strong {
        color: $purple;
        font-weight: 700;
      }
    }

  }

  .col-form {
    flex: 1;
    background: linear-gradient(135deg, #7f00ff, #00c6ff);
    padding: 0 20px;

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 440px;
      margin: 0 auto;

      .form-control,
      textarea {
        width: 100%;
        padding: 17px 17px;
        border: none;
        border-radius: 30px;
        background-color: rgba(9, 8, 160, 0.3);
        color: #fff;
        font-size: 14px;
        line-height: 26px;

        &:focus {
          outline: none;
        }
      }

      .form-group {
        position: relative;
        width: 100%;
      }


      label {
        position: absolute;
        left: 15px;
        top: 22px;
        color: #fff;
        font-size: 14px;
        pointer-events: none;
        transition: 0.2s ease all;
      }

      /* When input is focused or has content */
      input:focus+label,
      input:not(:placeholder-shown):valid+label,
      textarea:focus+label,
      textarea:not(:placeholder-shown):valid+label {
        top: 7px;
        font-size: 10px;
        color: #FFFFFF80
      }

      #btn-submit {
        padding: 17px 47px;
        width: 139px;
        font-weight: 700;
        background-color: #fff;
        color: #4241DC;
        border: none;
        border-radius: 30px;
        cursor: pointer;
      }
    }

    #btn-close {
      background: transparent;
      border: none;
      cursor: pointer;
      display: block;
      margin: 36px 36px 36px auto;
      transition: all .3s ease;
      &:hover {
        transform: scale(.9);
      }

      span {
        visibility: hidden;
        position: absolute;
        left: -9999px;
        opacity: 0;
      }

      img {
        width: 45px;
        height: 45px;
      }
    }
  }
}
</style>
