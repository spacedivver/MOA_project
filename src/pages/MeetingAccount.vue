<template>
	<!--begin::Card-->
	<div class="card-2" style="width: 800px; margin-left: 400px;">
		<h3>모임 일정</h3>
		<hr>
		<!--begin::Card header-->
		<div class="card-header d-flex justify-content-between align-items-center">
			<h2 class="card-title fw-bold">Calendar</h2>
			<div class="card-toolbar">
			  <button class="btn btn-flex btn-primary" @click="addEvent">
				<i class="ki-duotone ki-plus fs-2"></i>Add Event
			  </button>
			</div>
		  </div>
		  <br>

		<!--end::Card header-->
		<!--begin::Card body-->
		<div class="card-body">
			<!--begin::Calendar-->
			<FullCalendar :options="calendarOptions" />
			<!--end::Calendar-->
		</div>
		<!--end::Card body-->
	</div>
	<!--end::Card-->

	<br>

	<div class="costMember" style="margin-left: 150px;">
		<!--begin::Body-->
		<div class="card p-0">
			<div class="container">
				<div class=" card left-card">
					<!--begin::Header-->
					<div class="px-9 pt-6 card-rounded h-250px w-100 bgi-no-repeat bgi-size-cover bgi-position-y-top h-200px"
						style="background-color: skyblue;">
						<!--begin::Heading-->
						<div class="d-flex flex-stack">
							<h3 class="m-0 text-black fw-bold fs-3">남은 잔액</h3>
						</div>
						<!--end::Heading-->
						<!--begin::Balance-->
						<div class="fw-bold fs-7 text-center text-black pt-5">
							<span class="fw-bolder fs-2hx d-block mt-n1">₩ 37,562</span>
						</div>
						<!--end::Balance-->
					</div>
					<!--end::Header-->
					<!--begin::Items-->
					<div class="shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body"
						style="margin-top: -100px">
						<!--begin::Item-->
						<div v-for="meetingAccount in meetingAccounts.slice(0,4)" :key="meetingAccount.id"	class="d-flex align-items-center mb-4">
							<div class="fw-bold d-flex flex-column flex-grow-1">
								<span class="text-gray-800">{{ meetingAccount.day }} {{ meetingAccount.category }}</span>
							</div>
							<div class="text-gray-800 fw-bold">
								{{ meetingAccount.price }}원
							</div>
						</div>
						<!--end::Item-->
					</div>
					<!--end::Items-->
				</div>
				<!--end::Body-->
				
				<!-- 모임 인원 명단 코드 부분 -->
				<div class="right-card">
					<br>
					<!--begin::List Widget 2-->
					<div class="card card-xl-stretch mb-xl-8">
						<!--begin::Header-->
						<div class="card-header align-items-center border-0 mt-5">
							<h3 class="card-title align-items-start flex-column">
								<span class="fw-bolder text-gray-900 fs-2">모임 인원 명단</span>
							</h3>
							<div class="card-toolbar">
								<!--begin::Menu-->
								<button type="button"
									class="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3"
									data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
									<i class="ki-duotone ki-category fs-2 text-primary">
										<span class="path1"></span>
										<span class="path2"></span>
										<span class="path3"></span>
										<span class="path4"></span>
									</i>
								</button>
								<!--begin::Menu 2-->
								<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
									data-kt-menu="true">
									<!--begin::Menu item-->
									<div class="menu-item px-3">
										<div class="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions
										</div>
									</div>
									<!--end::Menu item-->
									<!--begin::Menu separator-->
									<div class="separator mb-3 opacity-75"></div>
									<!--end::Menu separator-->
									<!--begin::Menu item-->
									<div class="menu-item px-3">
										<a href="#" class="menu-link px-3">New Ticket</a>
									</div>
									<!--end::Menu item-->
									<!--begin::Menu item-->
									<div class="menu-item px-3">
										<a href="#" class="menu-link px-3">New Customer</a>
									</div>
									<!--end::Menu item-->
									<!--begin::Menu item-->
									<div class="menu-item px-3" data-kt-menu-trigger="hover"
										data-kt-menu-placement="right-start">
										<!--begin::Menu item-->
										<a href="#" class="menu-link px-3">
											<span class="menu-title">New Group</span>
											<span class="menu-arrow"></span>
										</a>
										<!--end::Menu item-->
										<!--begin::Menu sub-->
										<div class="menu-sub menu-sub-dropdown w-175px py-4">
											<!--begin::Menu item-->
											<div class="menu-item px-3">
												<a href="#" class="menu-link px-3">Admin Group</a>
											</div>
											<!--end::Menu item-->
											<!--begin::Menu item-->
											<div class="menu-item px-3">
												<a href="#" class="menu-link px-3">Staff Group</a>
											</div>
											<!--end::Menu item-->
											<!--begin::Menu item-->
											<div class="menu-item px-3">
												<a href="#" class="menu-link px-3">Member Group</a>
											</div>
											<!--end::Menu item-->
										</div>
										<!--end::Menu sub-->
									</div>
									<!--end::Menu item-->
									<!--begin::Menu item-->
									<div class="menu-item px-3">
										<a href="#" class="menu-link px-3">New Contact</a>
									</div>
									<!--end::Menu item-->
									<!--begin::Menu separator-->
									<div class="separator mt-3 opacity-75"></div>
									<!--end::Menu separator-->
									<!--begin::Menu item-->
									<div class="menu-item px-3">
										<div class="menu-content px-3 py-3">
											<a class="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
										</div>
									</div>
									<!--end::Menu item-->
								</div>
								<!--end::Menu 2-->
								<!--end::Menu-->
							</div>
						</div>
						<!--end::Header-->
						<!--begin::Body-->
						<div class="card-body pt-5">
							<!--begin::Item-->
							<div class="d-flex mb-6">
								<!--begin::Symbol-->
								<div class="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
								</div>
								<!--end::Symbol-->
								<!--begin::Section-->
								<div class="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
									<!--begin::Title-->
									<div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
										<a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">고대호</a>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" value=""
												id="flexCheckDefault" />
											<label class="form-check-label" for="flexCheckDefault">
												회비 납부
											</label>
										</div>
									</div>
									<!--end::Title-->
									<!--begin::Info-->
									<div class="text-end py-lg-0 py-2">
										<span class="text-gray-800 fw-bolder fs-3">24,900</span>
									</div>
									<!--end::Info-->
								</div>
								<!--end::Section-->
							</div>
							<!--end::Item-->
							<!--begin::Item-->
							<div class="d-flex mb-6">
								<!--begin::Symbol-->
								<div class="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
								</div>
								<!--end::Symbol-->
								<!--begin::Section-->
								<div class="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
									<!--begin::Title-->
									<div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
										<a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">김하늘</a>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" value=""
												id="flexCheckDefault" />
											<label class="form-check-label" for="flexCheckDefault">
												회비 납부
											</label>
										</div>
									</div>
									<!--end::Title-->
									<!--begin::Info-->
									<div class="text-end py-lg-0 py-2">
										<span class="text-gray-800 fw-bolder fs-3">15,900</span>
									</div>
									<!--end::Info-->
								</div>
								<!--end::Section-->
							</div>
							<!--end::Item-->
							<!--begin::Item-->
							<div class="d-flex mb-6">
								<!--begin::Symbol-->
								<div class="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
								</div>
								<!--end::Symbol-->
								<!--begin::Section-->
								<div class="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
									<!--begin::Title-->
									<div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
										<a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">박민지</a>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" value=""
												id="flexCheckDefault" />
											<label class="form-check-label" for="flexCheckDefault">
												회비 납부
											</label>
										</div>
									</div>
									<!--end::Title-->
									<!--begin::Info-->
									<div class="text-end py-lg-0 py-2">
										<span class="text-gray-800 fw-bolder fs-3">10,000</span>
									</div>
									<!--end::Info-->
								</div>
								<!--end::Section-->
							</div>
							<!--end::Item-->
							<!--begin::Item-->
							<div class="d-flex mb-6">
								<!--begin::Symbol-->
								<div class="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
								</div>
								<!--end::Symbol-->
								<!--begin::Section-->
								<div class="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
									<!--begin::Title-->
									<div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
										<a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">박선우</a>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" value=""
												id="flexCheckDefault" />
											<label class="form-check-label" for="flexCheckDefault">
												회비 납부
											</label>
										</div>
									</div>
									<!--end::Title-->
									<!--begin::Info-->
									<div class="text-end py-lg-0 py-2">
										<span class="text-gray-800 fw-bolder fs-3">7,500</span>
									</div>
									<!--end::Info-->
								</div>
								<!--end::Section-->
							</div>
							<!--end::Item-->
						</div>
						<!--end::Body-->
					</div>
					<!--end::List Widget 2-->
				</div>
			</div>
		</div>
	</div>
</template>



<script>
import { ref, onMounted } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from 'axios';

export default {
	name: 'MeetingAccount',
	components: {
		FullCalendar
	},
	setup() {
		const calendarOptions = ref({
			plugins: [dayGridPlugin],
			initialView: 'dayGridMonth',
			events: [
				{ title: 'All Day Event', start: '2024-06-01' },
				{ title: 'Long Event', start: '2024-06-07', end: '2024-06-10' },
				{ title: 'Meeting', start: '2024-06-12T10:30:00', end: '2024-06-12T12:30:00' }
			]
		})

		const addEvent = () => {
			alert('Add Event button clicked!')
		}

		const meetingAccounts = ref([]);

		const fetchMeetingAccountData = async () => {
			try {
				const response = await axios.get('/db.json');
				if (response.data && response.data.meetingAccounts) {
					meetingAccounts.value = response.data.meetingAccounts.map(meetingAccount => ({
						id: meetingAccount.id,
						category: meetingAccount.category,
						price: meetingAccount.price,
						day:meetingAccount.day,
					}));
				} else {
					console.error('API 응답에서 필요한 구조가 존재하지 않습니다.');
				}
			} catch (error) {
				console.error('전시 정보를 불러오는 중 오류가 발생했습니다:', error);
			}
		};

		onMounted(() => {
			fetchMeetingAccountData();
		});

		return {
			calendarOptions,
			addEvent,
			meetingAccounts
		}
	}
}
</script>


<style scoped>
.card {
	max-width: 1000px;
	margin: auto;
}

.card-2 {
	max-width: 1000px;
	margin: auto;
}

.container {
	display: flex;
	justify-content: space-between;
}

.left-card,
.right-card {
	flex: 1;
	margin-right: 5px;
	/* 카드에 필요한 추가 스타일 */
}
</style>