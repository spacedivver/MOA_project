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
                        <!--begin::Card body-->
                        <PersonalAsset :data="data"/>
                        <!--end::Card body-->
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
                                        <span class="card-label fw-bold text-gray-900">거래내역</span>
                                        <span class="text-gray-500 mt-1 fw-semibold fs-6">뭘 넣어야 할까</span>
                                    </h3>
                                    <!--end::Title-->
                                    <!--begin::Actions-->
                                    <div class="card-toolbar">
                                        <!--begin::Filters-->
                                        <div class="d-flex flex-stack flex-wrap gap-4">
                                            <!--begin::Destination-->
                                            <div class="d-flex align-items-center fw-bold">
                                                <!--begin::Label-->
                                                <div class="text-muted fs-7 me-2">카테고리</div>
                                                <!--end::Label-->
                                                <!--begin::Select-->
                                                <select class="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto" data-control="select2" data-hide-search="true" data-dropdown-css-class="w-150px" data-placeholder="Select an option">
                                                    <option></option>
                                                    <option value="Show All" selected="selected">전체</option>
                                                    <option value="a">문화/생활</option>
                                                    <option value="b">세금/공과금</option>
                                                    <option value="c">식비</option>
                                                </select>
                                                <!--end::Select-->
                                            </div>
                                            <!--end::Destination-->
                                            
                                            <!--begin::Status-->
                                            <div class="d-flex align-items-center fw-bold">
                                                <!--begin::Label-->
                                                <div class="text-muted fs-7 me-2">선택</div>
                                                <!--end::Label-->
                                                <!--begin::Select-->
                                                <select class="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto" data-control="select2" data-hide-search="true" data-dropdown-css-class="w-150px" data-placeholder="Select an option" data-kt-table-widget-5="filter_status">
                                                    <option></option>
                                                    <option value="Show All" selected="selected">전체</option>
                                                    <option value="Income">수입</option>
                                                    <option value="Expenditure">지출</option>
                                                </select>
                                                <!--end::Select-->
                                            </div>
                                            <!--end::Status-->
                                            <!--begin::Search-->
                                            <a href="apps/ecommerce/catalog/products.html" class="btn btn-light btn-sm">View Stock</a>
                                            <!--end::Search-->
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
											<h3 class="fw-bold m-0 text-gray-800">Jan 23, 2024</h3>
										</div>
										<!--end::Title-->
										<!--begin::Toolbar-->
										<div class="card-toolbar m-0">
											<!--begin::Tab nav-->
											<ul class="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bold" role="tablist">
												<li class="nav-item" role="presentation">
													<a id="kt_activity_today_tab" class="nav-link justify-content-center text-active-gray-800 active" data-bs-toggle="tab" role="tab" href="#kt_activity_today">Today</a>
												</li>
												<li class="nav-item" role="presentation">
													<a id="kt_activity_week_tab" class="nav-link justify-content-center text-active-gray-800" data-bs-toggle="tab" role="tab" href="#kt_activity_week">Week</a>
												</li>
												<li class="nav-item" role="presentation">
													<a id="kt_activity_month_tab" class="nav-link justify-content-center text-active-gray-800" data-bs-toggle="tab" role="tab" href="#kt_activity_month">Month</a>
												</li>
											</ul>
											<!--end::Tab nav-->
										</div>
										<!--end::Toolbar-->
									</div>
									<!--end::Card head-->
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
                                                            <th class="min-w-150px">날짜</th>
                                                            <th class="text-end pe-3 min-w-100px">금액</th>
                                                            <th class="text-end pe-3 min-w-150px">수입/지출</th>
                                                            <th class="text-end pe-3 min-w-150px">카테고리</th>
                                                            <th class="text-end pe-3 min-w-200px">메모</th>
                                                        </tr>
                                                        <!--end::Table row-->
                                                    </thead>
                                                    <!--end::Table head-->
                                                    <PersonalTable :data="data" />
                                                </table>
                                                <!--end::Table-->
											</div>
											<!--end::Tab panel-->
											<!--begin::Tab panel-->
											<div id="kt_activity_week" class="card-body p-0 tab-pane fade show" role="tabpanel" aria-labelledby="kt_activity_week_tab">
												<!--begin::Timeline-->
												<div class="timeline timeline-border-dashed">
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon me-4">
															<i class="ki-duotone ki-flag fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mb-10 mt-n2">
															<!--begin::Timeline heading-->
															<div class="overflow-auto pe-3">
																<!--begin::Title-->
																<div class="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="d-flex align-items-center mt-1 fs-6">
																	<!--begin::Info-->
																	<div class="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
																	<!--end::Info-->
																	<!--begin::User-->
																	<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
																		<img src="@/assets/media/avatars/300-1.jpg" alt="img" />
																	</div>
																	<!--end::User-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon">
															<i class="ki-duotone ki-disconnect fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
																<span class="path3"></span>
																<span class="path4"></span>
																<span class="path5"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mb-10 mt-n1">
															<!--begin::Timeline heading-->
															<div class="mb-5 pe-3">
																<!--begin::Title-->
																<a href="#" class="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="d-flex align-items-center mt-1 fs-6">
																	<!--begin::Info-->
																	<div class="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
																	<!--end::Info-->
																	<!--begin::User-->
																	<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
																		<img src="@/assets/media/avatars/300-23.jpg" alt="img" />
																	</div>
																	<!--end::User-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
															<!--begin::Timeline details-->
															<div class="overflow-auto pb-5">
																<div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
																	<!--begin::Item-->
																	<div class="d-flex flex-aligns-center pe-10 pe-lg-20">
																		<!--begin::Icon-->
																		<img alt="" class="w-30px me-3" src="@/assets/media/svg/files/pdf.svg" />
																		<!--end::Icon-->
																		<!--begin::Info-->
																		<div class="ms-1 fw-semibold">
																			<!--begin::Desc-->
																			<a href="apps/projects/project.html" class="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
																			<!--end::Desc-->
																			<!--begin::Number-->
																			<div class="text-gray-500">1.9mb</div>
																			<!--end::Number-->
																		</div>
																		<!--begin::Info-->
																	</div>
																	<!--end::Item-->
																	<!--begin::Item-->
																	<div class="d-flex flex-aligns-center pe-10 pe-lg-20">
																		<!--begin::Icon-->
																		<img alt="apps/projects/project.html" class="w-30px me-3" src="@/assets/media/svg/files/doc.svg" />
																		<!--end::Icon-->
																		<!--begin::Info-->
																		<div class="ms-1 fw-semibold">
																			<!--begin::Desc-->
																			<a href="#" class="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
																			<!--end::Desc-->
																			<!--begin::Number-->
																			<div class="text-gray-500">18kb</div>
																			<!--end::Number-->
																		</div>
																		<!--end::Info-->
																	</div>
																	<!--end::Item-->
																	<!--begin::Item-->
																	<div class="d-flex flex-aligns-center">
																		<!--begin::Icon-->
																		<img alt="apps/projects/project.html" class="w-30px me-3" src="@/assets/media/svg/files/css.svg" />
																		<!--end::Icon-->
																		<!--begin::Info-->
																		<div class="ms-1 fw-semibold">
																			<!--begin::Desc-->
																			<a href="#" class="fs-6 text-hover-primary fw-bold">Finance Reports</a>
																			<!--end::Desc-->
																			<!--begin::Number-->
																			<div class="text-gray-500">20mb</div>
																			<!--end::Number-->
																		</div>
																		<!--end::Icon-->
																	</div>
																	<!--end::Item-->
																</div>
															</div>
															<!--end::Timeline details-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon">
															<i class="ki-duotone ki-abstract-26 fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mb-10 mt-n1">
															<!--begin::Timeline heading-->
															<div class="pe-3 mb-5">
																<!--begin::Title-->
																<div class="fs-5 fw-semibold mb-2">Task 
																<a href="#" class="text-primary fw-bold me-1">#45890</a>merged with 
																<a href="#" class="text-primary fw-bold me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="d-flex align-items-center mt-1 fs-6">
																	<!--begin::Info-->
																	<div class="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
																	<!--end::Info-->
																	<!--begin::User-->
																	<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
																		<img src="@/assets/media/avatars/300-14.jpg" alt="img" />
																	</div>
																	<!--end::User-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon">
															<i class="ki-duotone ki-pencil fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mb-10 mt-n1">
															<!--begin::Timeline heading-->
															<div class="pe-3 mb-5">
																<!--begin::Title-->
																<div class="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="d-flex align-items-center mt-1 fs-6">
																	<!--begin::Info-->
																	<div class="text-muted me-2 fs-7">Created at 4:23 PM by</div>
																	<!--end::Info-->
																	<!--begin::User-->
																	<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
																		<img src="@/assets/media/avatars/300-2.jpg" alt="img" />
																	</div>
																	<!--end::User-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
															<!--begin::Timeline details-->
															<div class="overflow-auto pb-5">
																<div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
																	<!--begin::Item-->
																	<div class="overlay me-10">
																		<!--begin::Image-->
																		<div class="overlay-wrapper">
																			<img alt="img" class="rounded w-150px" src="@/assets/media/stock/600x400/img-29.jpg" />
																		</div>
																		<!--end::Image-->
																		<!--begin::Link-->
																		<div class="overlay-layer bg-dark bg-opacity-10 rounded">
																			<a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
																		</div>
																		<!--end::Link-->
																	</div>
																	<!--end::Item-->
																	<!--begin::Item-->
																	<div class="overlay me-10">
																		<!--begin::Image-->
																		<div class="overlay-wrapper">
																			<img alt="img" class="rounded w-150px" src="@/assets/media/stock/600x400/img-31.jpg" />
																		</div>
																		<!--end::Image-->
																		<!--begin::Link-->
																		<div class="overlay-layer bg-dark bg-opacity-10 rounded">
																			<a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
																		</div>
																		<!--end::Link-->
																	</div>
																	<!--end::Item-->
																	<!--begin::Item-->
																	<div class="overlay">
																		<!--begin::Image-->
																		<div class="overlay-wrapper">
																			<img alt="img" class="rounded w-150px" src="@/assets/media/stock/600x400/img-40.jpg" />
																		</div>
																		<!--end::Image-->
																		<!--begin::Link-->
																		<div class="overlay-layer bg-dark bg-opacity-10 rounded">
																			<a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
																		</div>
																		<!--end::Link-->
																	</div>
																	<!--end::Item-->
																</div>
															</div>
															<!--end::Timeline details-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon">
															<i class="ki-duotone ki-sms fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mb-10 mt-n1">
															<!--begin::Timeline heading-->
															<div class="pe-3 mb-5">
																<!--begin::Title-->
																<div class="fs-5 fw-semibold mb-2">New case 
																<a href="#" class="text-primary fw-bold me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="overflow-auto pb-5">
																	<!--begin::Wrapper-->
																	<div class="d-flex align-items-center mt-1 fs-6">
																		<!--begin::Info-->
																		<div class="text-muted me-2 fs-7">Added at 4:23 PM by</div>
																		<!--end::Info-->
																		<!--begin::User-->
																		<a href="#" class="text-primary fw-bold me-1">Alice Tan</a>
																		<!--end::User-->
																	</div>
																	<!--end::Wrapper-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
												</div>
												<!--end::Timeline-->
											</div>
											<!--end::Tab panel-->
											<!--begin::Tab panel-->
											<div id="kt_activity_month" class="card-body p-0 tab-pane fade show" role="tabpanel" aria-labelledby="kt_activity_month_tab">
												<!--begin::Timeline-->
												<div class="timeline timeline-border-dashed">
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon">
															<i class="ki-duotone ki-pencil fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mb-10 mt-n1">
															<!--begin::Timeline heading-->
															<div class="pe-3 mb-5">
																<!--begin::Title-->
																<div class="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="d-flex align-items-center mt-1 fs-6">
																	<!--begin::Info-->
																	<div class="text-muted me-2 fs-7">Created at 4:23 PM by</div>
																	<!--end::Info-->
																	<!--begin::User-->
																	<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
																		<img src="@/assets/media/avatars/300-2.jpg" alt="img" />
																	</div>
																	<!--end::User-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
															<!--begin::Timeline details-->
															<div class="overflow-auto pb-5">
																<div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
																	<!--begin::Item-->
																	<div class="overlay me-10">
																		<!--begin::Image-->
																		<div class="overlay-wrapper">
																			<img alt="img" class="rounded w-150px" src="@/assets/media/stock/600x400/img-29.jpg" />
																		</div>
																		<!--end::Image-->
																		<!--begin::Link-->
																		<div class="overlay-layer bg-dark bg-opacity-10 rounded">
																			<a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
																		</div>
																		<!--end::Link-->
																	</div>
																	<!--end::Item-->
																	<!--begin::Item-->
																	<div class="overlay me-10">
																		<!--begin::Image-->
																		<div class="overlay-wrapper">
																			<img alt="img" class="rounded w-150px" src="@/assets/media/stock/600x400/img-31.jpg" />
																		</div>
																		<!--end::Image-->
																		<!--begin::Link-->
																		<div class="overlay-layer bg-dark bg-opacity-10 rounded">
																			<a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
																		</div>
																		<!--end::Link-->
																	</div>
																	<!--end::Item-->
																	<!--begin::Item-->
																	<div class="overlay">
																		<!--begin::Image-->
																		<div class="overlay-wrapper">
																			<img alt="img" class="rounded w-150px" src="@/assets/media/stock/600x400/img-40.jpg" />
																		</div>
																		<!--end::Image-->
																		<!--begin::Link-->
																		<div class="overlay-layer bg-dark bg-opacity-10 rounded">
																			<a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
																		</div>
																		<!--end::Link-->
																	</div>
																	<!--end::Item-->
																</div>
															</div>
															<!--end::Timeline details-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon">
															<i class="ki-duotone ki-sms fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mb-10 mt-n1">
															<!--begin::Timeline heading-->
															<div class="pe-3 mb-5">
																<!--begin::Title-->
																<div class="fs-5 fw-semibold mb-2">New case 
																<a href="#" class="text-primary fw-bold me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="overflow-auto pb-5">
																	<!--begin::Wrapper-->
																	<div class="d-flex align-items-center mt-1 fs-6">
																		<!--begin::Info-->
																		<div class="text-muted me-2 fs-7">Added at 4:23 PM by</div>
																		<!--end::Info-->
																		<!--begin::User-->
																		<a href="#" class="text-primary fw-bold me-1">Alice Tan</a>
																		<!--end::User-->
																	</div>
																	<!--end::Wrapper-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon">
															<i class="ki-duotone ki-basket fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
																<span class="path3"></span>
																<span class="path4"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mt-n1">
															<!--begin::Timeline heading-->
															<div class="pe-3 mb-5">
																<!--begin::Title-->
																<div class="fs-5 fw-semibold mb-2">New order 
																<a href="#" class="text-primary fw-bold me-1">#67890</a>is placed for Workshow Planning & Budget Estimation</div>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="d-flex align-items-center mt-1 fs-6">
																	<!--begin::Info-->
																	<div class="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
																	<!--end::Info-->
																	<!--begin::User-->
																	<a href="#" class="text-primary fw-bold me-1">Jimmy Bold</a>
																	<!--end::User-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon me-4">
															<i class="ki-duotone ki-flag fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mb-10 mt-n2">
															<!--begin::Timeline heading-->
															<div class="overflow-auto pe-3">
																<!--begin::Title-->
																<div class="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="d-flex align-items-center mt-1 fs-6">
																	<!--begin::Info-->
																	<div class="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
																	<!--end::Info-->
																	<!--begin::User-->
																	<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
																		<img src="@/assets/media/avatars/300-1.jpg" alt="img" />
																	</div>
																	<!--end::User-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon">
															<i class="ki-duotone ki-disconnect fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
																<span class="path3"></span>
																<span class="path4"></span>
																<span class="path5"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mb-10 mt-n1">
															<!--begin::Timeline heading-->
															<div class="mb-5 pe-3">
																<!--begin::Title-->
																<a href="#" class="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="d-flex align-items-center mt-1 fs-6">
																	<!--begin::Info-->
																	<div class="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
																	<!--end::Info-->
																	<!--begin::User-->
																	<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
																		<img src="@/assets/media/avatars/300-23.jpg" alt="img" />
																	</div>
																	<!--end::User-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
															<!--begin::Timeline details-->
															<div class="overflow-auto pb-5">
																<div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
																	<!--begin::Item-->
																	<div class="d-flex flex-aligns-center pe-10 pe-lg-20">
																		<!--begin::Icon-->
																		<img alt="" class="w-30px me-3" src="@/assets/media/svg/files/pdf.svg" />
																		<!--end::Icon-->
																		<!--begin::Info-->
																		<div class="ms-1 fw-semibold">
																			<!--begin::Desc-->
																			<a href="apps/projects/project.html" class="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
																			<!--end::Desc-->
																			<!--begin::Number-->
																			<div class="text-gray-500">1.9mb</div>
																			<!--end::Number-->
																		</div>
																		<!--begin::Info-->
																	</div>
																	<!--end::Item-->
																	<!--begin::Item-->
																	<div class="d-flex flex-aligns-center pe-10 pe-lg-20">
																		<!--begin::Icon-->
																		<img alt="apps/projects/project.html" class="w-30px me-3" src="@/assets/media/svg/files/doc.svg" />
																		<!--end::Icon-->
																		<!--begin::Info-->
																		<div class="ms-1 fw-semibold">
																			<!--begin::Desc-->
																			<a href="#" class="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
																			<!--end::Desc-->
																			<!--begin::Number-->
																			<div class="text-gray-500">18kb</div>
																			<!--end::Number-->
																		</div>
																		<!--end::Info-->
																	</div>
																	<!--end::Item-->
																	<!--begin::Item-->
																	<div class="d-flex flex-aligns-center">
																		<!--begin::Icon-->
																		<img alt="apps/projects/project.html" class="w-30px me-3" src="@/assets/media/svg/files/css.svg" />
																		<!--end::Icon-->
																		<!--begin::Info-->
																		<div class="ms-1 fw-semibold">
																			<!--begin::Desc-->
																			<a href="#" class="fs-6 text-hover-primary fw-bold">Finance Reports</a>
																			<!--end::Desc-->
																			<!--begin::Number-->
																			<div class="text-gray-500">20mb</div>
																			<!--end::Number-->
																		</div>
																		<!--end::Icon-->
																	</div>
																	<!--end::Item-->
																</div>
															</div>
															<!--end::Timeline details-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon">
															<i class="ki-duotone ki-abstract-26 fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mb-10 mt-n1">
															<!--begin::Timeline heading-->
															<div class="pe-3 mb-5">
																<!--begin::Title-->
																<div class="fs-5 fw-semibold mb-2">Task 
																<a href="#" class="text-primary fw-bold me-1">#45890</a>merged with 
																<a href="#" class="text-primary fw-bold me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="d-flex align-items-center mt-1 fs-6">
																	<!--begin::Info-->
																	<div class="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
																	<!--end::Info-->
																	<!--begin::User-->
																	<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
																		<img src="@/assets/media/avatars/300-14.jpg" alt="img" />
																	</div>
																	<!--end::User-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
												</div>
												<!--end::Timeline-->
											</div>
											<!--end::Tab panel-->
											<!--begin::Tab panel-->
											<div id="kt_activity_year" class="card-body p-0 tab-pane fade show" role="tabpanel" aria-labelledby="kt_activity_year_tab">
												<!--begin::Timeline-->
												<div class="timeline timeline-border-dashed">
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon">
															<i class="ki-duotone ki-disconnect fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
																<span class="path3"></span>
																<span class="path4"></span>
																<span class="path5"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mb-10 mt-n1">
															<!--begin::Timeline heading-->
															<div class="mb-5 pe-3">
																<!--begin::Title-->
																<a href="#" class="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="d-flex align-items-center mt-1 fs-6">
																	<!--begin::Info-->
																	<div class="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
																	<!--end::Info-->
																	<!--begin::User-->
																	<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
																		<img src="@/assets/media/avatars/300-23.jpg" alt="img" />
																	</div>
																	<!--end::User-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
															<!--begin::Timeline details-->
															<div class="overflow-auto pb-5">
																<div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
																	<!--begin::Item-->
																	<div class="d-flex flex-aligns-center pe-10 pe-lg-20">
																		<!--begin::Icon-->
																		<img alt="" class="w-30px me-3" src="@/assets/media/svg/files/pdf.svg" />
																		<!--end::Icon-->
																		<!--begin::Info-->
																		<div class="ms-1 fw-semibold">
																			<!--begin::Desc-->
																			<a href="apps/projects/project.html" class="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
																			<!--end::Desc-->
																			<!--begin::Number-->
																			<div class="text-gray-500">1.9mb</div>
																			<!--end::Number-->
																		</div>
																		<!--begin::Info-->
																	</div>
																	<!--end::Item-->
																	<!--begin::Item-->
																	<div class="d-flex flex-aligns-center pe-10 pe-lg-20">
																		<!--begin::Icon-->
																		<img alt="apps/projects/project.html" class="w-30px me-3" src="@/assets/media/svg/files/doc.svg" />
																		<!--end::Icon-->
																		<!--begin::Info-->
																		<div class="ms-1 fw-semibold">
																			<!--begin::Desc-->
																			<a href="#" class="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
																			<!--end::Desc-->
																			<!--begin::Number-->
																			<div class="text-gray-500">18kb</div>
																			<!--end::Number-->
																		</div>
																		<!--end::Info-->
																	</div>
																	<!--end::Item-->
																	<!--begin::Item-->
																	<div class="d-flex flex-aligns-center">
																		<!--begin::Icon-->
																		<img alt="apps/projects/project.html" class="w-30px me-3" src="@/assets/media/svg/files/css.svg" />
																		<!--end::Icon-->
																		<!--begin::Info-->
																		<div class="ms-1 fw-semibold">
																			<!--begin::Desc-->
																			<a href="#" class="fs-6 text-hover-primary fw-bold">Finance Reports</a>
																			<!--end::Desc-->
																			<!--begin::Number-->
																			<div class="text-gray-500">20mb</div>
																			<!--end::Number-->
																		</div>
																		<!--end::Icon-->
																	</div>
																	<!--end::Item-->
																</div>
															</div>
															<!--end::Timeline details-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon">
															<i class="ki-duotone ki-abstract-26 fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mb-10 mt-n1">
															<!--begin::Timeline heading-->
															<div class="pe-3 mb-5">
																<!--begin::Title-->
																<div class="fs-5 fw-semibold mb-2">Task 
																<a href="#" class="text-primary fw-bold me-1">#45890</a>merged with 
																<a href="#" class="text-primary fw-bold me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="d-flex align-items-center mt-1 fs-6">
																	<!--begin::Info-->
																	<div class="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
																	<!--end::Info-->
																	<!--begin::User-->
																	<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
																		<img src="@/assets/media/avatars/300-14.jpg" alt="img" />
																	</div>
																	<!--end::User-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon">
															<i class="ki-duotone ki-pencil fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mb-10 mt-n1">
															<!--begin::Timeline heading-->
															<div class="pe-3 mb-5">
																<!--begin::Title-->
																<div class="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="d-flex align-items-center mt-1 fs-6">
																	<!--begin::Info-->
																	<div class="text-muted me-2 fs-7">Created at 4:23 PM by</div>
																	<!--end::Info-->
																	<!--begin::User-->
																	<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
																		<img src="@/assets/media/avatars/300-2.jpg" alt="img" />
																	</div>
																	<!--end::User-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
															<!--begin::Timeline details-->
															<div class="overflow-auto pb-5">
																<div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
																	<!--begin::Item-->
																	<div class="overlay me-10">
																		<!--begin::Image-->
																		<div class="overlay-wrapper">
																			<img alt="img" class="rounded w-150px" src="@/assets/media/stock/600x400/img-29.jpg" />
																		</div>
																		<!--end::Image-->
																		<!--begin::Link-->
																		<div class="overlay-layer bg-dark bg-opacity-10 rounded">
																			<a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
																		</div>
																		<!--end::Link-->
																	</div>
																	<!--end::Item-->
																	<!--begin::Item-->
																	<div class="overlay me-10">
																		<!--begin::Image-->
																		<div class="overlay-wrapper">
																			<img alt="img" class="rounded w-150px" src="@/assets/media/stock/600x400/img-31.jpg" />
																		</div>
																		<!--end::Image-->
																		<!--begin::Link-->
																		<div class="overlay-layer bg-dark bg-opacity-10 rounded">
																			<a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
																		</div>
																		<!--end::Link-->
																	</div>
																	<!--end::Item-->
																	<!--begin::Item-->
																	<div class="overlay">
																		<!--begin::Image-->
																		<div class="overlay-wrapper">
																			<img alt="img" class="rounded w-150px" src="@/assets/media/stock/600x400/img-40.jpg" />
																		</div>
																		<!--end::Image-->
																		<!--begin::Link-->
																		<div class="overlay-layer bg-dark bg-opacity-10 rounded">
																			<a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
																		</div>
																		<!--end::Link-->
																	</div>
																	<!--end::Item-->
																</div>
															</div>
															<!--end::Timeline details-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon">
															<i class="ki-duotone ki-sms fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mb-10 mt-n1">
															<!--begin::Timeline heading-->
															<div class="pe-3 mb-5">
																<!--begin::Title-->
																<div class="fs-5 fw-semibold mb-2">New case 
																<a href="#" class="text-primary fw-bold me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="overflow-auto pb-5">
																	<!--begin::Wrapper-->
																	<div class="d-flex align-items-center mt-1 fs-6">
																		<!--begin::Info-->
																		<div class="text-muted me-2 fs-7">Added at 4:23 PM by</div>
																		<!--end::Info-->
																		<!--begin::User-->
																		<a href="#" class="text-primary fw-bold me-1">Alice Tan</a>
																		<!--end::User-->
																	</div>
																	<!--end::Wrapper-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
													<!--begin::Timeline item-->
													<div class="timeline-item">
														<!--begin::Timeline line-->
														<div class="timeline-line"></div>
														<!--end::Timeline line-->
														<!--begin::Timeline icon-->
														<div class="timeline-icon">
															<i class="ki-duotone ki-basket fs-2 text-gray-500">
																<span class="path1"></span>
																<span class="path2"></span>
																<span class="path3"></span>
																<span class="path4"></span>
															</i>
														</div>
														<!--end::Timeline icon-->
														<!--begin::Timeline content-->
														<div class="timeline-content mt-n1">
															<!--begin::Timeline heading-->
															<div class="pe-3 mb-5">
																<!--begin::Title-->
																<div class="fs-5 fw-semibold mb-2">New order 
																<a href="#" class="text-primary fw-bold me-1">#67890</a>is placed for Workshow Planning & Budget Estimation</div>
																<!--end::Title-->
																<!--begin::Description-->
																<div class="d-flex align-items-center mt-1 fs-6">
																	<!--begin::Info-->
																	<div class="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
																	<!--end::Info-->
																	<!--begin::User-->
																	<a href="#" class="text-primary fw-bold me-1">Jimmy Bold</a>
																	<!--end::User-->
																</div>
																<!--end::Description-->
															</div>
															<!--end::Timeline heading-->
														</div>
														<!--end::Timeline content-->
													</div>
													<!--end::Timeline item-->
												</div>
												<!--end::Timeline-->
											</div>
											<!--end::Tab panel-->
										</div>
										<!--end::Tab Content-->
									</div>
									<!--end::Card body-->
								</div>
								<!--end::Timeline-->
                                </div>
                                <!--end::Card body-->
                            </div>
                            <!--end::Table Widget 5-->
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Row-->
                </div>
                <!--end::Container-->
            </div>
            <!--end::Post-->
        </div>
  </div>
</template>
<script setup>
import PersonalTable from '@/components/PersonalTable.vue';
import PersonalAsset from '@/components/PersonalAsset.vue';
</script>