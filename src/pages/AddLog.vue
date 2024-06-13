<template>
    <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
      <div class="content fs-6 d-flex flex-column flex-column-fluid p-5" id="kt_content">
        <div class="col-md-7 col-lg-8" style="margin-left: 180px;">
          <h4 class="mb-3">Add Log</h4>
          <form class="needs-validation" novalidate @submit.prevent="submitForm">
            <div class="row g-3">
              <div class="col-12">
                <label for="date" class="form-label">Date <span class="text-body-secondary">(YYYY-MM-DD)</span></label>
                <input v-model="date" type="text" class="form-control" id="date" placeholder="2024-06-13">
                <div class="invalid-feedback">
                  날짜를 입력해주세요
                </div>
              </div>
              <br>
  
              <div class="col-12">
                <label for="amount" class="form-label">Amount</label>
                <input v-model="amount" type="text" class="form-control" id="amount" placeholder="10000">
                <div class="invalid-feedback">
                  금액을 입력해주세요
                </div>
              </div>
  
              <div class="col-md-5">
                <label for="category" class="form-label">Category</label>
                <select v-model="category" class="form-select" id="category" required>
                  <option value="">Choose...</option>
                  <option>저축</option>
                  <option>식비</option>
                  <option>세금/공과금</option>
                  <option>여행</option>
                  <option>쇼핑</option>
                  <option>문화</option>
                  <option>교통</option>
                  <option>기타</option>
                </select>
                <div class="invalid-feedback">
                  카테고리를 선택해주세요
                </div>
              </div>
  
              <h4 class="mb-3">Type</h4>
  
              <div class="my-3">
                <div class="form-check">
                  <input v-model="type" id="income" name="type" type="radio" class="form-check-input" value="수입" required>
                  <label class="form-check-label" for="income">수입</label>
                </div>
                <div class="form-check">
                  <input v-model="type" id="out" name="type" type="radio" class="form-check-input" value="지출" required>
                  <label class="form-check-label" for="out">지출</label>
                </div>
              </div>
  
              <h4 class="mb-3">Payment</h4>
  
              <div class="my-3">
                <div class="form-check">
                  <input v-model="payment" id="credit" name="payment" type="radio" class="form-check-input" value="카드" required>
                  <label class="form-check-label" for="credit">Credit card</label>
                </div>
                <div class="form-check">
                  <input v-model="payment" id="account" name="payment" type="radio" class="form-check-input" value="현금" required>
                  <label class="form-check-label" for="account">Account</label>
                </div>
              </div>
  
              <h4 class="mb-3">Fix</h4>
  
              <div class="col-12 form-check form-switch">
                <input v-model="fix" class="form-check-input" type="checkbox" id="fix" name="darkmode" value="yes">
                <label class="form-check-label" for="fix">매 월 고정</label>
              </div>
  
              <div class="col-12">
                <label for="memo" class="form-label">Memo</label>
                <input v-model="memo" type="text" class="form-control" id="memo">
                <div class="invalid-feedback">
                  메모를 입력해주세요
                </div>
              </div>
  
              <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const date = ref('');
  const amount = ref('');
  const category = ref('');
  const type = ref('');
  const payment = ref('');
  const fix = ref(false);
  const memo = ref('');
  
  const submitForm = () => {
    let personalHistory = {
      date: date.value,
      amount: amount.value,
      category: category.value,
      type: type.value,
      payment: payment.value,
      fix: fix.value,
      memo: memo.value
    };
  
    axios.post('http://localhost:3000/personalHistory', personalHistory)
      .then(response => {
        console.log(response.data);
        alert('Log saved successfully!');
      })
      .catch(error => {
        console.error('Error saving log:', error);
        alert('Failed to save log.');
      });
  };
  </script>
  

<style>

</style>