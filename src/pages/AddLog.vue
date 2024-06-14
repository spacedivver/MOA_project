<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <div class="content fs-6 d-flex flex-column flex-column-fluid p-5" id="kt_content">
      <div class="col-md-7 col-lg-8" style="margin-left: 180px;">
        <h4 class="mb-3">거래 내역 추가</h4>
        <form class="needs-validation" novalidate @submit.prevent="submitForm">
          <div class="row g-3">
            <!-- Remove ID input as it's fixed to 'aaa' -->
            <input type="hidden" v-model="userId" value="aaa">
            
            <div class="col-12">
              <label for="date" class="form-label">날짜 <span class="text-body-secondary">(YYYY-MM-DD)</span></label>
              <input v-model="date" type="text" class="form-control" id="date" placeholder="ex) 2024-06-13" required>
              <div class="invalid-feedback">
                날짜를 입력해주세요
              </div>
            </div>

            <div class="col-12">
              <label for="amount" class="form-label">금액</label>
              <input v-model="amount" type="number" class="form-control" id="amount" placeholder="ex) 10000" required>
              <div class="invalid-feedback">
                금액을 입력해주세요
              </div>
            </div>

            <div class="col-md-5">
              <label for="category" class="form-label">카테고리</label>
              <select v-model="category" class="form-select" id="category" required>
                <option value="">선택</option>
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

            <h4 class="mb-3">수입/지출</h4>

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

            <h4 class="mb-3">결제 방식</h4>

            <div class="my-3">
              <div class="form-check">
                <input v-model="payment" id="credit" name="payment" type="radio" class="form-check-input" value="카드" required>
                <label class="form-check-label" for="credit">신용카드</label>
              </div>
              <div class="form-check">
                <input v-model="payment" id="account" name="payment" type="radio" class="form-check-input" value="현금" required>
                <label class="form-check-label" for="account">계좌</label>
              </div>
            </div>

            <h4 class="mb-3">고정지출 유무</h4>

            <div class="col-12 form-check form-switch">
              <input v-model="fix" class="form-check-input" type="checkbox" id="fix" name="fix" value="yes">
              <label class="form-check-label" for="fix">매 월 고정</label>
            </div>

            <div class="col-12">
              <label for="memo" class="form-label">메모</label>
              <input v-model="memo" type="text" class="form-control" id="memo">
              <div class="invalid-feedback">
                메모를 입력해주세요
              </div>
            </div>

            <button class="w-100 btn btn-primary btn-lg" type="submit">등록</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const userId = ref('aaa'); // Fixed userId as 'aaa'
const date = ref('');
const amount = ref('');
const category = ref('');
const type = ref('');
const payment = ref('');
const fix = ref(false);
const memo = ref('');

const submitForm = () => {
  // Fetch user data to get the correct userId
  axios.get('http://localhost:3000/users')
    .then(response => {
      // Find userId === 'aaa'
      const user = response.data.find(user => user.userId === 'aaa');
      if (!user) {
        throw new Error('User with userId "aaa" not found.');
      }

      // Calculate asset change based on transaction type
      let assetChange = Number(amount.value);

      // Update user's asset
      axios.patch(`http://localhost:3000/users/${user.id}`, { 
        asset: Number(Number(user.asset) + assetChange)
      })
        .then(() => {
          // Prepare data to post to Personalhistory
          let personalHistory = {
            userId: user.id,
            date: date.value,
            amount: Number(amount.value),
            category: category.value,
            type: type.value,
            payment: payment.value,
            fix: fix.value,
            memo: memo.value
          };

          // Post to Personalhistory
          axios.post('http://localhost:3000/personalHistory', personalHistory)
            .then(response => {
              console.log(response.data);
              alert('Log saved successfully!');
            })
            .catch(error => {
              console.error('Error saving log:', error);
              alert('Failed to save log.');
            });
        })
        .catch(error => {
          console.error('Error updating user asset:', error);
          alert('Failed to update user asset.');
        });
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
      alert('Failed to fetch user data.');
    });
};
</script>
