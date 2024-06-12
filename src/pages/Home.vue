<template>

  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <div class="content fs-6 d-flex flex-column flex-column-fluid" id="kt_content">
      <!-- <div class="row g-5 g-xl-8"> -->
      <!--begin::Toolbar-->
      <!-- 소비 내역 -->
      <div class="toolbar" id="kt_toolbar">
        <div class="container-fluid d-flex flex-stack flex-wrap flex-sm-nowrap py-4">
          <!-- 소비 내역 제목 -->
          <div class="d-flex flex-column align-items-start justify-content-center flex-wrap me-2">
            <h1 class="text-gray-900 fw-bold my-1 fs-2">{{ month }}월 내 소비
              <small class="text-muted fs-6 fw-normal ms-1"></small>
            </h1>
          </div>
        </div>

        <!--begin::Post-->
        <div class="post fs-6 d-flex flex-column-fluid" id="kt_post">
          <!--begin::Container-->
          <div class="container">
            <!--begin::Row-->
            <div class="row g-xl-8">
              <!--begin::Col-->
              <!-- 가로 길이 full -> 12로 설정 -->
              <div class="col-xxl-12">
                <!--begin::Row-->
                <div class="row g-xl-8">

                  <!--begin::Col-->
                  <div class="col-xl-6">
                    <!--begin::Chart Widget 1-->
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                      <!--begin::Body-->
                      <!-- <div class="card-body p-0 d-flex justify-content-between flex-column"> -->
                      <!-- <div class="d-flex flex-stack card-p flex-grow-1"> -->

                      <!-- 현재 자산 카드 시작 -->
                      <!-- <div class="col-lg-6 col-xxl-4"> -->
                      <!--begin::Budget-->
                      <div class="card h-100">
                        <div class="card-body p-9">
                          <div class="fs-4 fw-semibold text-gray-500">총 자산</div>
                          <div>
                            <span class="fs-2hx fw-bold">{{ addComma(300000) }}</span>
                            <span class="fs-1hx">원</span>
                          </div>
                          <div class="fs-6 d-flex justify-content-between mt-4 mb-4">
                            <div class="fw-semibold">입금</div>
                            <div class="d-flex fw-bold">
                              <i class="ki-duotone ki-arrow-up-right fs-3 me-1 text-success">
                                <span class="path1"></span>
                                <span class="path2"></span>
                              </i>$6,570
                            </div>
                          </div>
                          <div class="separator separator-dashed"></div>
                          <div class="fs-6 d-flex justify-content-between my-4">
                            <div class="fw-semibold">출금</div>
                            <div class="d-flex fw-bold">
                              <i class="ki-duotone ki-arrow-down-left fs-3 me-1 text-danger">
                                <span class="path1"></span>
                                <span class="path2"></span>
                              </i>$408
                            </div>
                          </div>
                          <!--end::Budget-->
                          <!-- 현재 자산 카드 끝 -->

                          <!--begin::Text-->
                          <!-- <div class="d-flex flex-column text-end">
                            <span class="fw-bolder text-gray-800 fs-2">Orders</span>
                            <span class="text-gray-500 fw-semibold fs-6">Sep 1 - Sep 16 2020</span>
                          </div> -->
                          <!--end::Text-->
                        </div>
                        <!--begin::Chart-->
                        <div class="pt-1">
                          <div id="kt_chart_widget_1_chart" class="card-rounded-bottom h-125px"></div>
                        </div>
                        <!--end::Chart-->
                      </div>
                    </div>
                    <!--end::Chart Widget 1-->
                  </div>
                  <!--end::Col-->

                  <!-- 목표 달성도 차트 시작 -->
                  <!--begin::Col-->
                  <div class="col-xl-6">
                    <!--begin::Chart Widget 4-->
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                      <!--begin::Beader-->
                      <div class="card-header border-0 py-5">
                        <h3 class="card-title align-items-start flex-column">
                          <span class="card-label fw-bolder text-gray-900 fs-2">이달의 목표 달성도</span>
                          <span class="text-gray-500 mt-2 fw-semibold fs-6">{{ name }}님의 목표 달성 금액을 확인해보세요</span>
                        </h3>
                      </div>
                      <!--end::Header-->
                      <!--begin::Body-->
                      <div class="card-body d-flex flex-column pt-0">
                        <!-- 목표 달성도 차트 그리기 시작 -->
                        <!--begin::Chart-->
                        <div class="d-flex flex-center position-relative">
                          <Achievement />
                        </div>
                        <!--end::Chart-->
                        <!-- 목표 달성도 차트 그리기 끝 -->
                      </div>
                      <!--end::Body-->
                    </div>
                    <!--end::Chart Widget 4-->
                  </div>
                  <!--end::Col-->
                  <!-- 목표 달성도 차트 끝 -->
                </div>
                <!--end::Row-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->

            <!--begin::Row-->
            <div class="row g-xl-8">
              <!--begin::Col-->
              <div class="col-xxl-12">

                <!--begin::Row-->
                <div class="row g-xl-8">
                  <!--begin::Col-->
                  <div class="col-xl-6">
                    <!--begin::Chart Widget 1-->
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                      <!--begin::Body-->
                      <!-- <div class="card-body p-0 d-flex justify-content-between flex-column"> -->
                      <!-- <div class="d-flex flex-stack card-p flex-grow-1"> -->

                      <!-- 현재 자산 카드 시작 -->
                      <!-- <div class="col-lg-6 col-xxl-4"> -->
                      <div class="card h-100">
                        <div class="card-body p-9">
                          <div class="fs-2 fw-bold">{{ month }}월에는 9만원 덜 썼어요</div>
                          <div class="fs-6 fw-semibold text-gray-500">한 달에 평균 34만원 정도 써요</div>
                          <!-- 현재 자산 카드 끝 -->

                          <!--begin::Text-->
                          <!-- <div class="d-flex flex-column text-end">
                            <span class="fw-bolder text-gray-800 fs-2">Orders</span>
                            <span class="text-gray-500 fw-semibold fs-6">Sep 1 - Sep 16 2020</span>
                          </div> -->
                          <!--end::Text-->
                        </div>
                        <!--begin::Chart-->
                        <div class="pt-1">
                          <Monthly />
                          <!-- <div id="kt_chart_widget_1_chart" class="card-rounded-bottom h-125px"></div> -->
                        </div>
                        <!--end::Chart-->
                      </div>
                    </div>
                  </div>
                  <!--end::Col-->

                  <!-- 목표 달성도 차트 시작 -->
                  <!--begin::Col-->
                  <div class="col-xl-6">
                    <!--begin::Chart Widget 4-->
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                      <!--begin::Beader-->
                      <div class="card-header border-0 py-5">
                        <h3 class="card-title align-items-start flex-column">
                          <span class="card-label fw-bolder text-gray-900 fs-2">이달의 목표 달성도</span>
                          <span class="text-gray-500 mt-2 fw-semibold fs-6">{{ name }}님의 목표 달성 금액을 확인해보세요</span>
                        </h3>
                      </div>
                      <!--end::Header-->
                      <!--begin::Body-->
                      <div class="card-body d-flex flex-column pt-0">
                        <!-- 목표 달성도 차트 그리기 시작 -->
                        <!--begin::Chart-->
                        <div class="d-flex flex-center position-relative">
                          <!-- <Monthly /> -->
                        </div>
                        <!--end::Chart-->
                        <!-- 목표 달성도 차트 그리기 끝 -->
                      </div>
                      <!--end::Body-->
                    </div>
                    <!--end::Chart Widget 4-->
                  </div>
                  <!--end::Col-->
                  <!-- 목표 달성도 차트 끝 -->
                </div>
                <!--end::Row-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->

            <!--begin::Row-->
            <div class="row g-5 gx-xxl-8 mb-xxl-3">
              <!--begin::Col-->
              <div class="col-xxl-8">
                <!--begin::Table widget 1-->
                <div class="card card-xxl-stretch mb-xl-3">
                  <!--begin::Header-->
                  <div class="card-header border-0 pt-5 pb-3">
                    <!--begin::Heading-->
                    <h3 class="card-title align-items-start flex-column">
                      <span class="card-label fw-bolder text-gray-800 fs-2">Teams Progress</span>
                      <span class="text-gray-500 fw-semibold mt-2 fs-6">890,344 Sales</span>
                    </h3>
                    <!--end::Heading-->
                    <!--begin::Toolbar-->
                    <div class="card-toolbar">
                      <!--begin::Select-->
                      <div class="pe-6 my-1">
                        <select class="form-select form-select-sm form-select-solid w-125px" data-control="select2"
                          data-placeholder="All Users" data-hide-search="true">
                          <option value="1" selected="selected">All Users</option>
                          <option value="2">Active users</option>
                          <option value="3">Pending users</option>
                        </select>
                      </div>
                      <!--end::Select-->
                      <!--begin::Search-->
                      <div class="w-125px position-relative my-1">
                        <i
                          class="ki-duotone ki-magnifier fs-2 text-gray-500 position-absolute top-50 translate-middle ms-6">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </i>
                        <input type="text" class="form-control form-control-sm form-control-solid ps-10" name="search"
                          value="" placeholder="Search" />
                      </div>
                      <!--end::Search-->
                    </div>
                    <!--end::Toolbar-->
                  </div>
                  <!--end::Header-->
                  <!--begin::Body-->
                  <div class="card-body py-0">
                    <!--begin::Table-->
                    <div class="table-responsive">
                      <table class="table align-middle table-row-bordered table-row-dashed gy-5" id="kt_table_widget_1">
                        <tbody>
                          <tr class="text-start text-gray-500 fw-bolder fs-7 text-uppercase">
                            <th class="w-20px ps-0">
                              <div class="form-check form-check-sm form-check-custom form-check-solid me-5">
                                <input class="form-check-input" type="checkbox" data-kt-check="true"
                                  data-kt-check-target="#kt_table_widget_1 .form-check-input" value="1" />
                              </div>
                            </th>
                            <th class="min-w-200px px-0">Authors</th>
                            <th class="min-w-125px">Company</th>
                            <th class="min-w-125px">Progress</th>
                            <th class="text-end pe-2 min-w-70px">Action</th>
                          </tr>
                          <tr>
                            <td class="p-0">
                              <div class="form-check form-check-sm form-check-custom form-check-solid">
                                <input class="form-check-input" type="checkbox" value="1" />
                              </div>
                            </td>
                            <td class="p-0">
                              <div class="d-flex align-items-center">
                                <div class="symbol symbol-50px me-2">
                                  <span class="symbol-label">
                                    <img alt="" class="w-25px" src="@/assets/media/svg/brand-logos/aven.svg" />
                                  </span>
                                </div>
                                <div class="ps-3">
                                  <a href="#" class="text-gray-800 fw-bolder fs-5 text-hover-primary mb-1">Brad
                                    Simmons</a>
                                  <span class="text-gray-500 fw-semibold d-block">HTML, JS, ReactJS</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span class="text-gray-800 fw-bolder fs-5 d-block">Intertico</span>
                              <span class="text-gray-500 fw-semibold">Web, UI/UX Design</span>
                            </td>
                            <td>
                              <div class="d-flex flex-column w-100 me-2 mt-2">
                                <span class="text-gray-500 me-2 fw-bolder mb-2">65%</span>
                                <div class="progress bg-light-danger w-100 h-5px">
                                  <div class="progress-bar bg-danger" role="progressbar" style="width: 65%;"></div>
                                </div>
                              </div>
                            </td>
                            <td class="pe-0 text-end">
                              <a href="pages/projects/project.html"
                                class="btn btn-light text-muted fw-bolder btn-sm px-5">View</a>
                            </td>
                          </tr>
                          <tr>
                            <td class="p-0">
                              <div class="form-check form-check-sm form-check-custom form-check-solid">
                                <input class="form-check-input" type="checkbox" value="1" />
                              </div>
                            </td>
                            <td class="p-0">
                              <div class="d-flex align-items-center">
                                <div class="symbol symbol-50px me-2">
                                  <span class="symbol-label">
                                    <img alt="" class="w-25px" src="@/assets/media/svg/brand-logos/leaf.svg" />
                                  </span>
                                </div>
                                <div class="ps-3">
                                  <a href="#" class="text-gray-800 fw-bolder fs-5 text-hover-primary mb-1">Jessie
                                    Clarcson</a>
                                  <span class="text-gray-500 fw-semibold d-block">C#, ASP.NET, MS SQL</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span class="text-gray-800 fw-bolder fs-5 d-block">Agoda</span>
                              <span class="text-gray-500 fw-semibold">Houses & Hotels</span>
                            </td>
                            <td>
                              <div class="d-flex flex-column w-100 me-2">
                                <span class="text-gray-500 me-2 fw-bolder mb-2">85%</span>
                                <div class="progress bg-light-primary w-100 h-5px">
                                  <div class="progress-bar bg-primary" role="progressbar" style="width: 85%;"></div>
                                </div>
                              </div>
                            </td>
                            <td class="pe-0 text-end">
                              <a href="pages/projects/project.html"
                                class="btn btn-light text-muted fw-bolder btn-sm px-5">View</a>
                            </td>
                          </tr>
                          <tr>
                            <td class="p-0">
                              <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                                <input class="form-check-input" type="checkbox" value="1" />
                              </div>
                            </td>
                            <td class="p-0">
                              <div class="d-flex align-items-center text-start">
                                <div class="symbol symbol-50px me-2">
                                  <span class="symbol-label">
                                    <img class="w-25px" alt="" src="@/assets/media/svg/brand-logos/atica.svg" />
                                  </span>
                                </div>
                                <div class="ps-3">
                                  <a href="#" class="text-gray-800 fw-bolder fs-5 text-hover-primary mb-1">Lebron
                                    Wayde</a>
                                  <span class="text-gray-500 fw-semibold d-block">PHP, Laravel, VueJS</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span class="text-gray-800 fw-bolder fs-5 d-block">RoadGee</span>
                              <span class="text-gray-500 fw-semibold">Transportation</span>
                            </td>
                            <td>
                              <div class="d-flex flex-column w-100 me-2">
                                <span class="text-gray-500 me-2 fw-bolder mb-2">4%</span>
                                <div class="progress bg-light-success w-100 h-5px">
                                  <div class="progress-bar bg-success" role="progressbar" style="width: 47%;"></div>
                                </div>
                              </div>
                            </td>
                            <td class="pe-0 text-end">
                              <a href="pages/projects/project.html"
                                class="btn btn-light text-muted fw-bolder btn-sm px-5">View</a>
                            </td>
                          </tr>
                          <tr>
                            <td class="p-0">
                              <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                                <input class="form-check-input" type="checkbox" value="1" />
                              </div>
                            </td>
                            <td class="p-0">
                              <div class="d-flex align-items-center text-start">
                                <div class="symbol symbol-50px me-2">
                                  <span class="symbol-label">
                                    <img class="w-25px" alt="" src="@/assets/media/svg/brand-logos/volicity-9.svg" />
                                  </span>
                                </div>
                                <div class="ps-3">
                                  <a href="#" class="text-gray-800 fw-bolder fs-5 text-hover-primary mb-1">Natali
                                    Trump</a>
                                  <span class="text-gray-500 fw-semibold d-block">Python, ReactJS</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span class="text-gray-800 fw-bolder fs-5 d-block">The Hill</span>
                              <span class="text-gray-500 fw-semibold">Insurance</span>
                            </td>
                            <td>
                              <div class="d-flex flex-column w-100 me-2">
                                <span class="text-gray-500 me-2 fw-bolder mb-2">71%</span>
                                <div class="progress bg-light-info w-100 h-5px">
                                  <div class="progress-bar bg-info" role="progressbar" style="width: 71%;"></div>
                                </div>
                              </div>
                            </td>
                            <td class="pe-0 text-end">
                              <a href="pages/projects/project.html"
                                class="btn btn-light text-muted fw-bolder btn-sm px-5">View</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!--end::Table-->
                  </div>
                  <!--end::Body-->
                </div>
                <!--end::Table widget 1-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->

            <!--begin::Row-->
            <div class="row g-5 g-xl-8">
              <!--begin::Col-->
              <div class="col-xl-4">
                <!--begin::List Widget 3-->
                <div class="card card-xl-stretch mb-xl-8">
                  <!--begin::Header-->
                  <div class="card-header align-items-center border-0 mt-5">
                    <h3 class="card-title align-items-start flex-column">
                      <span class="fw-bolder text-gray-900 fs-2">My Agents</span>
                      <span class="text-gray-500 mt-2 fw-semibold fs-6">More than 400+ new members</span>
                    </h3>
                    <div class="card-toolbar">
                      <!--begin::Menu-->
                      <button type="button"
                        class="btn btn-active-light-primary btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3"
                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <i class="ki-duotone ki-category fs-2 text-primary">
                          <span class="path1"></span>
                          <span class="path2"></span>
                          <span class="path3"></span>
                          <span class="path4"></span>
                        </i>
                      </button>
                      <!--begin::Menu 1-->
                      <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true"
                        id="kt_menu_66289cbe06c0a">
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
                              <select class="form-select form-select-solid" multiple="multiple" data-kt-select2="true"
                                data-close-on-select="false" data-placeholder="Select option"
                                data-dropdown-parent="#kt_menu_66289cbe06c0a" data-allow-clear="true">
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
                              <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                                <input class="form-check-input" type="checkbox" value="1" />
                                <span class="form-check-label">Author</span>
                              </label>
                              <!--end::Options-->
                              <!--begin::Options-->
                              <label class="form-check form-check-sm form-check-custom form-check-solid">
                                <input class="form-check-input" type="checkbox" value="2" checked="checked" />
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
                            <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                              <input class="form-check-input" type="checkbox" value="" name="notifications"
                                checked="checked" />
                              <label class="form-check-label">Enabled</label>
                            </div>
                            <!--end::Switch-->
                          </div>
                          <!--end::Input group-->
                          <!--begin::Actions-->
                          <div class="d-flex justify-content-end">
                            <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2"
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
                  <!--end::Header-->
                  <!--begin::Body-->
                  <div class="card-body pt-5">
                    <!--begin::Item-->
                    <div class="d-flex flex-stack mb-7">
                      <!--begin::Section-->
                      <div class="d-flex align-items-center">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-35px me-4">
                          <img src="@/assets/media/avatars/300-2.jpg" alt="" />
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="ps-1">
                          <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Anne Clarc</a>
                          <div class="fs-7 text-gray-500 fw-semibold mt-1">HTML, CSS, Laravel</div>
                        </div>
                        <!--end::Title-->
                      </div>
                      <!--end::Section-->
                      <!--begin::Details-->
                      <a href="pages/user-profile/overview.html"
                        class="btn btn-light btn-color-muted fw-bolder btn-sm px-5">Details</a>
                      <!--end::Details-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="d-flex flex-stack mb-7">
                      <!--begin::Section-->
                      <div class="d-flex align-items-center">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-35px me-4">
                          <img src="@/assets/media/avatars/300-1.jpg" alt="" />
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="ps-1">
                          <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Brad Simmons</a>
                          <div class="fs-7 text-gray-500 fw-semibold mt-1">HTML, JS, ReactJS</div>
                        </div>
                        <!--end::Title-->
                      </div>
                      <!--end::Section-->
                      <!--begin::Details-->
                      <a href="pages/user-profile/overview.html"
                        class="btn btn-light btn-color-muted fw-bolder btn-sm px-5">Details</a>
                      <!--end::Details-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="d-flex flex-stack mb-7">
                      <!--begin::Section-->
                      <div class="d-flex align-items-center">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-35px me-4">
                          <img src="@/assets/media/avatars/300-5.jpg" alt="" />
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="ps-1">
                          <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Randy Trent</a>
                          <div class="fs-7 text-gray-500 fw-semibold mt-1">C#, ASP.NET, MS SQL</div>
                        </div>
                        <!--end::Title-->
                      </div>
                      <!--end::Section-->
                      <!--begin::Details-->
                      <a href="pages/user-profile/overview.html"
                        class="btn btn-light btn-color-muted fw-bolder btn-sm px-5">Details</a>
                      <!--end::Details-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="d-flex flex-stack mb-7">
                      <!--begin::Section-->
                      <div class="d-flex align-items-center">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-35px me-4">
                          <img src="@/assets/media/avatars/300-20.jpg" alt="" />
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="ps-1">
                          <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Ricky Hunt</a>
                          <div class="fs-7 text-gray-500 fw-semibold mt-1">PHP, Laravel, VueJS</div>
                        </div>
                        <!--end::Title-->
                      </div>
                      <!--end::Section-->
                      <!--begin::Details-->
                      <a href="pages/user-profile/overview.html"
                        class="btn btn-light btn-color-muted fw-bolder btn-sm px-5">Details</a>
                      <!--end::Details-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="d-flex flex-stack mb-">
                      <!--begin::Section-->
                      <div class="d-flex align-items-center">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-35px me-4">
                          <img src="@/assets/media/avatars/300-23.jpg" alt="" />
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="ps-1">
                          <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Jessie Clarcson</a>
                          <div class="fs-7 text-gray-500 fw-semibold mt-1">ReactJS</div>
                        </div>
                        <!--end::Title-->
                      </div>
                      <!--end::Section-->
                      <!--begin::Details-->
                      <a href="pages/user-profile/overview.html"
                        class="btn btn-light btn-color-muted fw-bolder btn-sm px-5">Details</a>
                      <!--end::Details-->
                    </div>
                    <!--end::Item-->
                  </div>
                  <!--end::Body-->
                </div>
                <!--end::List Widget 3-->
              </div>
              <!--end::Col-->
              <!--begin::Col-->
              <div class="col-xl-4">
                <!--begin::List Widget 4-->
                <div class="card card-xl-stretch mb-5 mb-xl-8">
                  <!--begin::Header-->
                  <div class="card-header align-items-center border-0 mt-5">
                    <h3 class="card-title align-items-start flex-column">
                      <span class="fw-bolder text-gray-900 fs-2">Timeline</span>
                      <span class="text-gray-500 mt-2 fw-semibold fs-6">890,344 Sales</span>
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
                      <div
                        class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                        data-kt-menu="true">
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <div class="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
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
                        <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
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
                  <div class="card-body pt-4">
                    <div class="position-relative">
                      <!--begin::Border-->
                      <div class="w-35px d-flex justify-content-center">
                        <div
                          class="border-start border border-1 border-dashed border-gray-300 top-0 bottom-0 mb-5 mt-5 position-absolute">
                        </div>
                      </div>
                      <!--end::Border-->
                      <!--begin::Item-->
                      <div class="d-flex flex-stack pb-10">
                        <!--begin::Section-->
                        <div class="d-flex">
                          <!--begin::Symbol-->
                          <div class="symbol symbol-35px me-5 mt-2">
                            <span class="symbol-label">
                              <i class="ki-duotone ki-abstract-26 fs-2 text-gray-600">
                                <span class="path1"></span>
                                <span class="path2"></span>
                              </i>
                            </span>
                          </div>
                          <!--end::Symbol-->
                          <!--begin::Title-->
                          <div class="pe-3">
                            <a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">Developer Library
                              Added</a>
                            <div class="text-gray-500 fw-semibold mt-1">New
                              <a href="#" class="link-primary p-1">Author Account</a>with Affiliate
                            </div>
                          </div>
                          <!--end::Title-->
                        </div>
                        <!--end::Section-->
                        <!--begin::Label-->
                        <span class="fw-bolder fs-7 text-gray-500">2HR</span>
                        <!--end::Label-->
                      </div>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <div class="d-flex flex-stack pb-10">
                        <!--begin::Section-->
                        <div class="d-flex">
                          <!--begin::Symbol-->
                          <div class="symbol symbol-35px me-5 mt-2">
                            <span class="symbol-label">
                              <i class="ki-duotone ki-credit-cart fs-2 text-gray-600">
                                <span class="path1"></span>
                                <span class="path2"></span>
                              </i>
                            </span>
                          </div>
                          <!--end::Symbol-->
                          <!--begin::Title-->
                          <div class="pe-3">
                            <a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">Payments Methods
                              Added</a>
                            <div class="text-gray-500 fw-semibold mt-1">Added
                              <span class="text-gray-700 pe-1">Payoneer</span>&
                              <span class="text-gray-700">Transferwise</span>
                            </div>
                          </div>
                          <!--end::Title-->
                        </div>
                        <!--end::Section-->
                        <!--begin::Label-->
                        <span class="fw-bolder fs-7 text-gray-500">6HR</span>
                        <!--end::Label-->
                      </div>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <div class="d-flex flex-stack pb-10">
                        <!--begin::Section-->
                        <div class="d-flex">
                          <!--begin::Symbol-->
                          <div class="symbol symbol-35px me-5 mt-2">
                            <span class="symbol-label">
                              <i class="ki-duotone ki-basket fs-2 text-gray-600">
                                <span class="path1"></span>
                                <span class="path2"></span>
                                <span class="path3"></span>
                                <span class="path4"></span>
                              </i>
                            </span>
                          </div>
                          <!--end::Symbol-->
                          <!--begin::Title-->
                          <div class="pe-3">
                            <a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">New Order Placed</a>
                            <div class="text-gray-500 fw-semibold mt-1">
                              <a href="#" class="link-primary pe-1">#XDT-034</a>order received
                            </div>
                          </div>
                          <!--end::Title-->
                        </div>
                        <!--end::Section-->
                        <!--begin::Label-->
                        <span class="fw-bolder fs-7 text-gray-500">4DY</span>
                        <!--end::Label-->
                      </div>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <div class="d-flex flex-stack pb-10">
                        <!--begin::Section-->
                        <div class="d-flex">
                          <!--begin::Symbol-->
                          <div class="symbol symbol-35px me-5 mt-2">
                            <span class="symbol-label">
                              <i class="ki-duotone ki-address-book fs-2 text-gray-600">
                                <span class="path1"></span>
                                <span class="path2"></span>
                                <span class="path3"></span>
                              </i>
                            </span>
                          </div>
                          <!--end::Symbol-->
                          <!--begin::Title-->
                          <div class="pr-3">
                            <a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">New User Library
                              Added</a>
                            <div class="fs-7 text-gray-500 fw-semibold mt-2">New
                              <a href="#" class="link-primary pe-1">Author Account</a>created
                            </div>
                          </div>
                          <!--end::Title-->
                        </div>
                        <!--end::Section-->
                        <!--begin::Label-->
                        <span class="fw-bolder fs-7 text-gray-500">27DY</span>
                        <!--end::Label-->
                      </div>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <div class="d-flex flex-stack">
                        <!--begin::Section-->
                        <div class="d-flex">
                          <!--begin::Symbol-->
                          <div class="symbol symbol-35px me-5 mt-2">
                            <span class="symbol-label">
                              <i class="ki-duotone ki-document fs-2 text-gray-600">
                                <span class="path1"></span>
                                <span class="path2"></span>
                              </i>
                            </span>
                          </div>
                          <!--end::Symbol-->
                          <!--begin::Title-->
                          <div class="pe-3">
                            <a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">New Story Created</a>
                            <div class="text-gray-500 fw-semibold mt-1">
                              <a href="#" class="link-primary pe-1">#XDT-034</a>order received
                            </div>
                          </div>
                          <!--end::Title-->
                        </div>
                        <!--end::Section-->
                        <!--begin::Label-->
                        <span class="fw-bolder fs-7 text-gray-500">2MO</span>
                        <!--end::Label-->
                      </div>
                      <!--end::Item-->
                    </div>
                  </div>
                  <!--end::Body-->
                </div>
                <!--end::List Widget 4-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->
          </div>
          <!--end::Container-->

        </div>
        <!--end::Toolbar-->
      </div>
    </div>
    <!--end::Post-->
  </div>
  <!-- </body> -->
</template>

<script setup>
import { ref } from 'vue';
import Achievement from '@/components/widgets/Achievement.vue'
import Monthly from '@/components/widgets/Monthly.vue'

const date = new Date();
let month = ref(date.getMonth() + 1);

const addComma = (number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}

</script>