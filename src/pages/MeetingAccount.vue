<template>
	<!--begin::Card-->
	<div class="card-2" style="width: 800px; margin-right: 300px;">
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
							<h3 class="text-black fw-bold fs-3" style="margin-left: 170px;">모임 금액</h3>
							<div class="ms-1">
								<!--begin::Menu-->
								<button type="button"
									class="btn btn-sm btn-icon btn-color-white btn-active-light-success me-n3"
									data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
									<i class="ki-duotone ki-category fs-6">
										<span class="path1"></span>
										<span class="path2"></span>
										<span class="path3"></span>
										<span class="path4"></span>
									</i>
								</button>
								<!--begin::Menu 1-->
								<div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true"
									id="kt_menu_66289cc8ec223">
									<!--begin::Header-->
									<div class="px-7 py-5">
										<div class="fs-5 text-gray-900 fw-bold">Filter Options</div>
									</div>
									<!--end::Header-->
									<!--begin::Menu separator-->
									<div class="separator border-gray-200"></div>
									<!--end::Menu separator-->
									<!--begin::Form-->
									<div class="px-7 py-5">
										<!--begin::Input group-->
										<div class="mb-10">
											<!--begin::Label-->
											<label class="form-label fw-semibold">Status:</label>
											<!--end::Label-->
											<!--begin::Input-->
											<div>
												<select class="form-select form-select-solid" multiple="multiple"
													data-kt-select2="true" data-close-on-select="false"
													data-placeholder="Select option"
													data-dropdown-parent="#kt_menu_66289cc8ec223"
													data-allow-clear="true">
													<option></option>
													<option value="1">Approved</option>
													<option value="2">Pending</option>
													<option value="2">In Process</option>
													<option value="2">Rejected</option>
												</select>
											</div>
											<!--end::Input-->
										</div>
										<!--end::Input group-->
										<!--begin::Input group-->
										<div class="mb-10">
											<!--begin::Label-->
											<label class="form-label fw-semibold">Member Type:</label>
											<!--end::Label-->
											<!--begin::Options-->
											<div class="d-flex">
												<!--begin::Options-->
												<label
													class="form-check form-check-sm form-check-custom form-check-solid me-5">
													<input class="form-check-input" type="checkbox" value="1" />
													<span class="form-check-label">Author</span>
												</label>
												<!--end::Options-->
												<!--begin::Options-->
												<label
													class="form-check form-check-sm form-check-custom form-check-solid">
													<input class="form-check-input" type="checkbox" value="2"
														checked="checked" />
													<span class="form-check-label">Customer</span>
												</label>
												<!--end::Options-->
											</div>
											<!--end::Options-->
										</div>
										<!--end::Input group-->
										<!--begin::Input group-->
										<div class="mb-10">
											<!--begin::Label-->
											<label class="form-label fw-semibold">Notifications:</label>
											<!--end::Label-->
											<!--begin::Switch-->
											<div
												class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
												<input class="form-check-input" type="checkbox" value=""
													name="notifications" checked="checked" />
												<label class="form-check-label">Enabled</label>
											</div>
											<!--end::Switch-->
										</div>
										<!--end::Input group-->
										<!--begin::Actions-->
										<div class="d-flex justify-content-end">
											<button type="reset"
												class="btn btn-sm btn-light btn-active-light-primary me-2"
												data-kt-menu-dismiss="true">Reset</button>
											<button type="submit" class="btn btn-sm btn-primary"
												data-kt-menu-dismiss="true">Apply</button>
										</div>
										<!--end::Actions-->
									</div>
									<!--end::Form-->
								</div>
								<!--end::Menu 1-->
								<!--end::Menu-->
							</div>
						</div>
						<!--end::Heading-->
						<!--begin::Balance-->
						<div class="fw-bold fs-7 text-center text-black pt-5">
							<span class="fw-bolder fs-2hx d-block mt-n1">₩ 37,562.00</span>
						</div>
						<!--end::Balance-->
					</div>
					<!--end::Header-->
					<!--begin::Items-->
					<div class="shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body"
						style="margin-top: -100px">
						<!--begin::Item-->
						<div class="d-flex align-items-center mb-9">
							<div class="symbol symbol-40px me-5">
								<span class="symbol-label">
									<i class="ki-duotone ki-document text-gray-500 fs-2">
										<span class="path1"></span>
										<span class="path2"></span>
									</i>
								</span>
							</div>
							<!--end::Symbol-->
							<!--begin::Description-->
							<div class="d-flex align-items-center flex-wrap w-100">
								<!--begin::Title-->
								<div class="mb-1 pe-3 flex-grow-1">
									<a href="#" class="fs-4 text-gray-800 text-hover-primary fw-bolder">고깃집</a>
									<!-- <div class="text-gray-500 fw-semibold">508 Commits</div> -->
								</div>
								<!--end::Title-->
								<!--begin::Label-->
								<div class="d-flex align-items-center">
									<div class="fw-bold fs-4 text-gray-800 pe-1">₩ 2,000</div>
									<a href="#" class="btn btn-icon btn-sm me-n2">
										<i class="ki-duotone ki-arrow-right fs-4 text-gray-500">
											<span class="path1"></span>
											<span class="path2"></span>
										</i>
									</a>
								</div>
								<!--end::Label-->
							</div>
							<!--end::Description-->
						</div>
						<!--end::Item-->
						<!--begin::Item-->
						<div class="d-flex align-items-center mb-9">
							<!--begin::Symbol-->
							<div class="symbol symbol-40px me-5">
								<span class="symbol-label">
									<i class="ki-duotone ki-element-11 text-gray-500 fs-2">
										<span class="path1"></span>
										<span class="path2"></span>
										<span class="path3"></span>
										<span class="path4"></span>
									</i>
								</span>
							</div>
							<!--end::Symbol-->
							<!--begin::Description-->
							<div class="d-flex align-items-center flex-wrap w-100">
								<!--begin::Title-->
								<div class="mb-1 pe-3 flex-grow-1">
									<a href="#" class="fs-4 text-gray-800 text-hover-primary fw-bolder">노래방</a>
									<!-- <div class="text-gray-500 fw-semibold">957 Commits</div> -->
								</div>
								<!--end::Title-->
								<!--begin::Label-->
								<div class="d-flex align-items-center">
									<div class="fw-bold fs-4 text-gray-800 pe-1">₩ 4,700</div>
									<a href="#" class="btn btn-icon btn-sm me-n2">
										<i class="ki-duotone ki-arrow-right fs-4 text-gray-500">
											<span class="path1"></span>
											<span class="path2"></span>
										</i>
									</a>
								</div>
								<!--end::Label-->
							</div>
							<!--end::Description-->
						</div>
						<!--end::Item-->
						<!--begin::Item-->
						<div class="d-flex align-items-center mb-9">
							<!--begin::Symbol-->
							<div class="symbol symbol-40px me-5">
								<span class="symbol-label">
									<i class="ki-duotone ki-abstract-18 text-gray-500 fs-2">
										<span class="path1"></span>
										<span class="path2"></span>
									</i>
								</span>
							</div>
							<!--end::Symbol-->
							<!--begin::Description-->
							<div class="d-flex align-items-center flex-wrap w-100">
								<!--begin::Title-->
								<div class="mb-1 pe-3 flex-grow-1">
									<a href="#" class="fs-4 text-gray-800 text-hover-primary fw-bolder">당구</a>
									<!-- <div class="text-gray-500 fw-semibold">82 Commits</div> -->
								</div>
								<!--end::Title-->
								<!--begin::Label-->
								<div class="d-flex align-items-center">
									<div class="fw-bold fs-4 text-gray-800 pe-1">₩ 830</div>
									<a href="#" class="btn btn-icon btn-sm me-n2">
										<i class="ki-duotone ki-arrow-right fs-4 text-gray-500">
											<span class="path1"></span>
											<span class="path2"></span>
										</i>
									</a>
								</div>
								<!--end::Label-->
							</div>
							<!--end::Description-->
						</div>
						<!--end::Item-->
						<!--begin::Item-->
						<div class="d-flex align-items-center mb-">
							<!--begin::Symbol-->
							<div class="symbol symbol-40px me-5">
								<span class="symbol-label">
									<i class="ki-duotone ki-document text-gray-500 fs-2">
										<span class="path1"></span>
										<span class="path2"></span>
									</i>
								</span>
							</div>
							<!--end::Symbol-->
							<!--begin::Description-->
							<div class="d-flex align-items-center flex-wrap w-100">
								<!--begin::Title-->
								<div class="mb-1 pe-3 flex-grow-1">
									<a href="#" class="fs-4 text-gray-800 text-hover-primary fw-bolder">경복궁 입장료</a>
									<!-- <div class="text-gray-500 fw-semibold">3605 Commits</div> -->
								</div>
								<!--end::Title-->
								<!--begin::Label-->
								<div class="d-flex align-items-center">
									<div class="fw-bold fs-4 text-gray-800 pe-1">₩ 27,300</div>
									<a href="#" class="btn btn-icon btn-sm me-n2">
										<i class="ki-duotone ki-arrow-right fs-4 text-gray-500">
											<span class="path1"></span>
											<span class="path2"></span>
										</i>
									</a>
								</div>
								<!--end::Label-->
							</div>
							<!--end::Description-->
						</div>
						<!--end::Item-->
					</div>
					<!--end::Items-->
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
										<span class="text-gray-800 fw-bolder fs-3">₩ 24,900</span>
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
										<span class="text-gray-800 fw-bolder fs-3">₩ 70,380</span>
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
										<span class="text-gray-800 fw-bolder fs-3">₩ 7,200</span>
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
										<span class="text-gray-800 fw-bolder fs-3">₩ 36,450</span>
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
import { ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'

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

		return {
			calendarOptions,
			addEvent
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