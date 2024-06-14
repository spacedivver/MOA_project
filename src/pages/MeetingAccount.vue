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
							<h3 class="m-0 text-black fw-bold fs-2">남은 잔액</h3>
						</div>
						<!--end::Heading-->
						<!--begin::Balance-->
						<div class="fw-bold fs-7 text-center text-black pt-5">
							<span class="fw-bolder fs-2hx d-block mt-n1">43,000원</span>
						</div>
						<!--end::Balance-->
					</div>
					<!--end::Header-->
					<!--begin::Items-->
					<div class="shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body"
						style="margin-top: -100px">
						<!--begin::Item-->
						<div v-for="partyAccount in sortedPartyAccounts.slice(0,4)" :key="partyAccount.id" class="d-flex align-items-center mb-4">
							<div class="fw-bold d-flex flex-column flex-grow-1">
								<span class="text-gray-800">{{ partyAccount.day }} {{ partyAccount.category }}</span>
							</div>
							<div class="text-gray-800 fw-bold">
								{{ partyAccount.price }}원
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
										<span class="text-gray-800 fw-bolder fs-3">100,000원</span>
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
										<span class="text-gray-800 fw-bolder fs-3">100,000원</span>
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
										<span class="text-gray-800 fw-bolder fs-3">100,000원</span>
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
										<span class="text-gray-800 fw-bolder fs-3">100,000원</span>
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
	name: 'PartyAccount',
	components: {
		FullCalendar
	},
	setup() {
		const calendarOptions = ref({
			plugins: [dayGridPlugin],
			initialView: 'dayGridMonth',
			events: [
				{ title: '야구 경기 관람', start: '2024-06-01' },
				{ title: '춘천 여행', start: '2024-06-07', end: '2024-06-10' },
				{ title: '점심 맛집 방문', start: '2024-06-12', end: '2024-06-12' }
			]
		})

	

		const addEvent = () => {
      const eventName = window.prompt('일정 이름을 입력하세요.');
      if (eventName) {
        const newEvent = {
          title: eventName,
          start: new Date().toISOString().slice(0, 10) // 오늘 날짜를 ISO 형식으로 저장
        };
        calendarOptions.value.events = [...calendarOptions.value.events, newEvent];
      }
    };

		const partyAccounts = ref([]);
		const sortedPartyAccounts = ref([]);

		const fetchPartyAccountData = async () => {
			try {
				const response = await axios.get('/db.json');
				if (response.data && response.data.partyAccounts) {
					partyAccounts.value = response.data.partyAccounts.map(partyAccount => ({
						id: partyAccount.id,
						category: partyAccount.category,
						price: partyAccount.price,
						day: partyAccount.day,
					}));
					sortedPartyAccounts.value = partyAccounts.value.sort((a, b) => new Date(b.day) - new Date(a.day));
				} else {
					console.error('API 응답에서 필요한 구조가 존재하지 않습니다.');
				}
			} catch (error) {
				console.error('전시 정보를 불러오는 중 오류가 발생했습니다:', error);
			}
		};

		onMounted(() => {
			fetchPartyAccountData();
		});

		return {
			calendarOptions,
			addEvent,
			partyAccounts,
			sortedPartyAccounts
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
