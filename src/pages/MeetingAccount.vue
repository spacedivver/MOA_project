<template>
	<!--begin::Card-->
	<div class="card-2" style="width: 800px; margin-left: 400px;">
		<h3>모임 일정</h3>
		<hr>
		<!--begin::Card header-->
		<div class="card-header">
			<h2 class="card-title fw-bold">Calendar</h2>
			<div class="card-toolbar">
				<button class="btn btn-flex btn-primary" @click="addEvent">
					<i class="ki-duotone ki-plus fs-2"></i>Add Event
				</button>
			</div>
		</div>

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
				<div class="left-card">
					<!--begin::Header-->
					<div class="px-9 pt-6 card-rounded h-250px w-100 bgi-no-repeat bgi-size-cover bgi-position-y-top h-200px"
						style="background-color: skyblue;">
						<!--begin::Heading-->
						<div class="d-flex flex-stack">
							<h3 class="m-0 text-black fw-bold fs-3">모임 금액</h3>
						</div>
						<!--end::Heading-->
						<!--begin::Balance-->
						<div class="fw-bold fs-7 text-center text-black pt-5">
							<span class="fw-bolder fs-2hx d-block mt-n1">$37,562.00</span>
						</div>
						<!--end::Balance-->
					</div>
					<!--end::Header-->
					<!--begin::Items-->
					<div class="shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body"
						style="margin-top: -100px">
						<!--begin::Item-->
						<div class="d-flex align-items-center mb-9">
							<!--begin::Description-->
							<div class="align-items-center flex-wrap w-100">
								<!--begin::Title-->
								<div v-for="meetingAccount in meetingAccounts" :key="meetingAccount.id"	class="card">
									<div class="card-body">
										<p class="card-text">
											{{ meetingAccount.category }}     {{ meetingAccount.price }} <br>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
					<!-- 모임 인원 명단 코드 부분 -->
					<!--end::Body-->
					<div class="right-card">
						<!--begin::List Widget 2-->
						<div class="card card-xl-stretch mb-xl-8">
							<!--begin::Header-->
							<div class="card-header align-items-center border-0 mt-5">
								<h3 class="card-title align-items-start flex-column">
									<span class="fw-bolder text-gray-900 fs-2">모임 인원 명단</span>
									<!-- <span class="text-gray-500 mt-2 fw-semibold fs-6">More than 400+ new members</span> -->
								</h3>
							</div>
							<!--end::Header-->
							<!--begin::Body-->
							<div class="card-body pt-5">
								<!--begin::Item-->
								<div class="d-flex mb-6">
									<!--begin::Symbol-->
									<div class="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
										<!-- <img src="assets/media/stock/600x400/img-17.jpg" class="mw-100" alt="" /> -->
									</div>
									<!--end::Symbol-->
									<!--begin::Section-->
									<div class="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
										<!--begin::Title-->
										<div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
											<a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">고대호</a>
											<!-- <span class="text-gray-500 fw-semibold fs-7 my-1">Study highway types</span> -->
											<!-- <span class="text-gray-500 fw-semibold fs-7">By: -->
											<!-- <a href="#" class="text-primary fw-semibold">CoreAd</a></span> -->
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
											<!-- <span class="text-gray-500 fs-7 fw-semibold d-block">Sales</span> -->
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
										<!-- <img src="assets/media/stock/600x400/img-10.jpg" class="mw-100" alt="" /> -->
									</div>
									<!--end::Symbol-->
									<!--begin::Section-->
									<div class="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
										<!--begin::Title-->
										<div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
											<a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">김하늘</a>
											<!-- <span class="text-gray-500 fw-semibold fs-7 my-1">Study highway types</span> -->
											<!-- <span class="text-gray-500 fw-semibold fs-7">By: -->
											<!-- <a href="#" class="text-primary fw-semibold">KeenThemes</a></span> -->
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
											<span class="text-gray-800 fw-bolder fs-3">70,380</span>
											<!-- <span class="text-gray-500 fs-7 fw-semibold d-block">Sales</span> -->
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
										<!-- <img src="assets/media/stock/600x400/img-1.jpg" class="mw-100" alt="" /> -->
									</div>
									<!--end::Symbol-->
									<!--begin::Section-->
									<div class="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
										<!--begin::Title-->
										<div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
											<a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">박민지</a>
											<!-- <span class="text-gray-500 fw-semibold fs-7 my-1">Study highway types</span> -->
											<!-- <span class="text-gray-500 fw-semibold fs-7">By: -->
											<!-- <a href="#" class="text-primary fw-semibold">Invision Inc.</a></span> -->
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
											<span class="text-gray-800 fw-bolder fs-3">7,200</span>
											<!-- <span class="text-gray-500 fs-7 fw-semibold d-block">Sales</span> -->
										</div>
										<!--end::Info-->
									</div>
									<!--end::Section-->
								</div>
								<!--end::Item-->
								<!--begin::Item-->
								<div class="d-flex mb-">
									<!--begin::Symbol-->
									<div class="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
										<!-- <img src="assets/media/stock/600x400/img-9.jpg" class="mw-100" alt="" /> -->
									</div>
									<!--end::Symbol-->
									<!--begin::Section-->
									<div class="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
										<!--begin::Title-->
										<div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
											<a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">박선우</a>
											<!-- <span class="text-gray-500 fw-semibold fs-7 my-1">Study highway types</span> -->
											<!-- <span class="text-gray-500 fw-semibold fs-7">By: -->
											<!-- <a href="#" class="text-primary fw-semibold">Figma Studio</a></span> -->
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
											<span class="text-gray-800 fw-bolder fs-3">36,450</span>
											<!-- <span class="text-gray-500 fs-7 fw-semibold d-block">Sales</span> -->
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