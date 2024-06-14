<template>
    <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <div class="content fs-6 d-flex flex-column flex-column-fluid" id="kt_content">
            <!--begin::Toolbar-->
            <div class="toolbar" id="kt_toolbar">
                <div class="container-fluid d-flex flex-stack flex-wrap flex-sm-nowrap">
                    <!--begin::Info-->
                    <div class="d-flex flex-column align-items-start justify-content-center flex-wrap me-2">
                        <!--begin::Title-->
                        <h1 class="text-gray-900 fw-bold my-1 fs-0">자산 정보</h1>
                        <!--end::Title-->
                    </div>
                    <!--end::Info-->
                </div>
            </div>
            <!--end::Toolbar-->
            <!--begin::Post-->
            <div class="post fs-6 d-flex flex-column-fluid" id="kt_post">
                <!--begin::Container-->
                <div class="container-xxl">
                    <!--begin::details View-->
                    <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
                      <div class="card-header cursor-pointer" v-if="user">
                        <!--begin::Card title-->
                        <div class="card-title m-0">
                            <h3 class="fw-bold m-0">{{ user.name }}님의 보유 자산은 {{ user.asset }}원 입니다.</h3>
                        </div>
                        <!--end::Card title-->
                        <!--begin::Action-->
                        <router-link to="/setting" class="btn btn-sm btn-primary align-self-center">자산 정보 수정</router-link>

                        <!--end::Action-->
                    </div>
                    <div class="card-body p-9">
                        <div class="row mb-7">
                            <label class="col-lg-4 fw-semibold text-muted">선택한 기간 동안의 수입 금액은 {{money.income}}원 입니다.</label>
                            <div class="col-lg-8">
                                <!-- <span class="fw-bold fs-6 text-gray-800">{{ item. }}</span> -->
                            </div>
                        </div>
                        <div class="row mb-7">
                            <label class="col-lg-4 fw-semibold text-muted">선택한 기간 동안의 지출 금액은 {{money.expense}}원 입니다.</label>
                            <div class="col-lg-8">
                                <!-- <span class="fw-bold fs-6 text-gray-800">{{ item. }}</span> -->
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
                      <div class="card-body">
                          <!--begin::Calendar-->
                          <FullCalendar :options="calendarOptions" />
                          <!--end::Calendar-->
                      </div>
                    </div>
                    <!--end::details View-->
                    <!--begin::Row-->
                    <div class="row gy-5 g-xl-10">
                        <!--begin::Col-->
                        <div class="col-xl-12">
                            <!--begin::Table Widget 5-->
                            <div class="card card-flush h-xl-100">
                                <!--begin::Card header-->
                                <div class="card-header pt-7">
                                    <!--begin::Title-->
                                    <h3 class="card-title align-items-start flex-column">
                                        <span class="card-label fw-bold text-gray-900">상세 거래 내역</span>
                                        <span class="text-gray-500 mt-1 fw-semibold fs-6">뭘 넣어야 할까</span>
                                    </h3>
                                    <!--end::Title-->
                                    <!--begin::Actions-->
                                    <div class="card-toolbar">
                                        <!--begin::Filters-->
                                        <div class="d-flex flex-stack flex-wrap gap-4">
                                    <!-- 카테고리 -->
                                    <div class="d-flex align-items-center fw-bold" style="white-space: nowrap;">
                                        <div class="text-muted fs-7 me-2">카테고리</div>
                                        <select class="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto"
                                                v-model="selectedCategory"
                                                @change="filterData"
                                                data-control="select2"
                                                data-hide-search="true"
                                                data-dropdown-css-class="w-150px"
                                                data-placeholder="전체">
                                            <option value="All" selected="selected">전체</option>
                                            <option value="여행">여행</option>
                                            <option value="쇼핑">쇼핑</option>
                                            <option value="문화">문화</option>
                                            <option value="교통">교통</option>
                                            <!-- '지출'이 선택되면 카테고리를 전체로 설정 -->
                                            <option v-if="selectedType !== '지출'" value="수입">수입</option>
                                        </select>
                                    </div>

                                    <!-- 수입/지출 -->
                                    <div class="d-flex align-items-center fw-bold" style="white-space: nowrap;">
                                        <div class="text-muted fs-7 me-2">선택</div>
                                        <select class="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto"
                                                v-model="selectedType"
                                                @change="filterData"
                                                data-control="select2"
                                                data-hide-search="true"
                                                data-dropdown-css-class="w-150px"
                                                data-placeholder="전체">
                                            <option value="All" selected="selected">전체</option>
                                            <option value="수입">수입</option>
                                            <option value="지출">지출</option>
                                        </select>
                                    </div>

                                    <!-- 검색 버튼 -->
                                    <button class="btn btn-light btn-sm" @click="filterData">검색</button>
                                </div>
                                        <!--begin::Filters-->
                                    </div>
                                    <!--end::Actions-->
                                </div>
                                <!--end::Card header-->
                                <!--begin::Card body-->
                                <div class="card-body">
                                <!--begin::Timeline-->
                                <div class="card">
									<!--begin::Card head-->
									<div class="card-header card-header-stretch">
										<!--begin::Title-->
										<div class="card-title d-flex align-items-center">
											<i class="ki-duotone ki-calendar-8 fs-1 text-primary me-3 lh-0">
												<span class="path1"></span>
												<span class="path2"></span>
												<span class="path3"></span>
												<span class="path4"></span>
												<span class="path5"></span>
												<span class="path6"></span>
											</i>
											<h3 class="fw-bold m-0 text-gray-800">{{ formattedCurrentDate }}</h3>
										</div>
										<!--end::Title-->
										<!--begin::Toolbar-->
                                        <div class="card-toolbar m-0">
                                        <!--begin::Tab nav-->
                                        <!--end::Tab nav-->
                                        </div>
                                        </div>
                                        <!--end::Toolbar-->
                                        <!--begin::Card body-->
                                        <div class="card-body">
                                        <!--begin::Tab Content-->
                                        <div class="tab-content">
                                            <!--begin::Tab panel-->
                                            <div id="kt_activity_today" class="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="kt_activity_today_tab">
                                            <!--begin::Table-->
                                            <table class="table align-middle table-row-dashed fs-6 gy-3" id="kt_table_widget_5_table">
                                                <!--begin::Table head-->
                                                <thead>
                                                <!--begin::Table row-->
                                                <tr class="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                                                    <th class="min-w-100px">날짜</th>
                                                    <th class="text-end pe-3 min-w-100px">금액</th>
                                                    <th class="text-end pe-3 min-w-100px">수입/지출</th>
                                                    <th class="text-end pe-3 min-w-100px">카테고리</th>
                                                    <th class="text-end pe-3 min-w-150px">메모</th>
                                                </tr>
                                                <!--end::Table row-->
                                                </thead>
                                                <!--end::Table head-->
                                                <PersonalTable :data="filteredData" />
                                            </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
</div>
                                    
</template>

<script>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import PersonalTable from '@/components/PersonalTable.vue';

export default {
  name: 'History',
  components: {
    FullCalendar,
    PersonalTable
  },
  setup() {
    const activeTab = ref('month'); // Use this for tab-based view
    const data = ref([]);
    const filteredData = ref([]);
    const formattedCurrentDate = ref('');

    const calendarOptions = ref({
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      dateClick: (info) => handleDateClick(info),
      datesSet: (info) => handleDatesSet(info),
      events: []
    });

    const user = ref(null);
    const currentMonth = ref('');
    const selectedType = ref(null);
    const selectedCategory = ref(null);

    const money = computed(() => {
      let totalIncome = 0;
      let totalExpense = 0;

      filteredData.value.forEach(transaction => {
        if (transaction.type === '수입') {
          totalIncome += transaction.amount;
        } else if (transaction.type === '지출') {
          totalExpense += transaction.amount;
        }
      });
      const addComma = (number) => {
        return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
      };

      const formattedIncome = addComma(totalIncome);
      const formattedExpense = addComma(totalExpense);

      return {
        income: formattedIncome,
        expense: formattedExpense
      };
    });

    // Fetch personal history data and calculate events
    const fetchAndCalculateEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/personalHistory');
        data.value = response.data;
        const events = calculateEvents(data.value);
        calendarOptions.value.events = events;
        // Update filtered data initially
        filteredData.value = data.value;

        // Calculate current year and month transactions
        getCurrentYearAndMonthTransactions();
      } catch (error) {
        console.error('Error fetching personal history:', error);
      }
    };

    const handleDateClick = (info) => {
      const clickedDate = info.dateStr;
      filteredData.value = filterDataByDate(clickedDate);
    };

    const filterDataByDate = (dateStr) => {
      return data.value.filter(item => item.date === dateStr);
    };

    const handleDatesSet = (info) => {
      const startOfMonth = info.view.currentStart;
      const endOfMonth = info.view.currentEnd;
      filteredData.value = filterDataByMonth(startOfMonth, endOfMonth);

      // Update current month
      const date = new Date(startOfMonth);
      currentMonth.value = date.getMonth() + 1;

      // Calculate transactions for the selected month
      getCurrentMonthTransactions(startOfMonth, endOfMonth);
    };

    const filterDataByMonth = (startOfMonth, endOfMonth) => {
      return data.value.filter(item => {
        const date = new Date(item.date);
        return date >= startOfMonth && date < endOfMonth;
      }).sort((a, b) => new Date(a.date) - new Date(b.date));
    };

    const getList = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        const users = response.data;
        user.value = users.find(u => u.id === '1');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const getCurrentMonth = () => {
      const date = new Date();
      currentMonth.value = date.getMonth() + 1;
    };

    const getCurrentMonthTransactions = (startOfMonth, endOfMonth) => {
      const transactions = filterDataByMonth(startOfMonth, endOfMonth);
      calculateMonthTotals(transactions);
    };

    const getCurrentYearAndMonthTransactions = () => {
      const date = new Date();
      const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
      const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      getCurrentMonthTransactions(startOfMonth, endOfMonth);
    };

    const calculateMonthTotals = (transactions) => {
      let totalIncome = 0;
      let totalExpense = 0;

      transactions.forEach(transaction => {
        if (transaction.type === '수입') {
          totalIncome += transaction.amount;
        } else if (transaction.type === '지출') {
          totalExpense += transaction.amount;
        }
      });

      console.log('Total Income:', totalIncome);
      console.log('Total Expense:', totalExpense);

      // Now you can use these totals as needed in your component
      // For example, assign them to reactive variables to display in your template
    };

    const calculateEvents = (personalHistory) => {
      const events = [];
      const transactionsByDate = groupTransactionsByDate(personalHistory);

      for (const date in transactionsByDate) {
        const transactions = transactionsByDate[date];
        let totalPlus = 0;
        let totalMinus = 0;
        let classNames1 = '';
        let classNames2 = '';

        transactions.forEach(transaction => {
          if (transaction.type === '수입') {
            totalPlus += transaction.amount;
          } else if (transaction.type === '지출') {
            totalMinus += transaction.amount;
          }
        });

        const title1 = `+${totalPlus.toLocaleString()}`;
        const title2 = `-${totalMinus.toLocaleString()}`;
        const start = date;

        classNames1 = 'income-event';
        classNames2 = 'expense-event';

        if (totalPlus > 0) {
          const event1 = { title: title1, start, classNames: classNames1 };
          events.push(event1);
        }
        if (totalMinus > 0) {
          const event2 = { title: title2, start, classNames: classNames2 };
          events.push(event2);
        }
      }

      return events;
    };

    const groupTransactionsByDate = (personalHistory) => {
      const transactionsByDate = {};
      personalHistory.forEach(transaction => {
        const date = transaction.date;
        if (!transactionsByDate[date]) {
          transactionsByDate[date] = [];
        }
        transactionsByDate[date].push(transaction);
      });
      return transactionsByDate;
    };

    onMounted(() => {
      fetchAndCalculateEvents();
      getList().then(() => {
        console.log("User loaded:", user.value);
      });
      getCurrentMonth();
    });

    return {
      calendarOptions,
      filteredData,
      activeTab,
      data,
      formattedCurrentDate,
      user,
      currentMonth,
      selectedType,
      selectedCategory,
      money // Add the money computed property to the return object
    };
  }
};
</script>





<style scoped>
:deep(.fc-event.income-event) {
  background-color: lightgreen; /* Example background color for income events */
}

:deep(.fc-event.expense-event) {
  background-color: lightcoral; /* Example background color for expense events */
}
</style>



