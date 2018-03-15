<template>
	<div class="flat-blue">

		<div class="app-container">
	        <div class="content-container">
	            <nav class="navbar navbar-default navbar-fixed-top navbar-top">
	                <div class="container-fluid">
	                    <div class="navbar-header" style="height:60px;">
	                        <button type="button" class="navbar-expand-toggle">
	                            <i class="fa fa-bars icon"></i>
	                        </button>
	                        
	                        <button type="button" class="navbar-right-expand-toggle pull-right visible-xs">
	                            <i class="fa fa-th icon"></i>
	                        </button>
	                    </div>
	                    <ul class="nav navbar-nav navbar-right">
	                        <li style="height: 60px;width:150px;">
	                          	<div class="_button hollow yellow" data-toggle="modal" data-target="#myModal"><span><span><i class="fa fa-cog u-mr5"></i><!-- react-text: 17 -->&nbsp;切换品牌<!-- /react-text --></span></span></div>
	                        </li>
	                        <li class="dropdown profile">
	                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" id="User">BMWDemo<span class="caret"></span></a>
	                            <ul class="dropdown-menu animated fadeInDown" id="User_box">
	                                <li class="profile-img">
	                                    <img src="../assets/people.jpg" class="profile-img" >
	                                </li>
	                                <li>
	                                    <div class="profile-info">
	                                        <h4 class="username">BMWDemo</h4>
	                                        <p>BMWDemo@xxxxxxx.com</p>
	                                        <div class="btn-group margin-bottom-2x" role="group">
	                                            <button type="button" class="btn btn-default"><i class="fa fa-user"></i> Profile</button>
	                                            <button type="button" class="btn btn-default" v-on:click="logout()"><i class="fa fa-sign-out"></i> Logout</button>
	                                        </div>
	                                    </div>
	                                </li>
	                            </ul>
	                        </li>
	                    </ul>
	                </div>
	            </nav>
	            <div class="side-menu sidebar-inverse">
	                <nav class="navbar navbar-default" role="navigation">
	                    <div class="side-menu-container">
	                        <div class="navbar-header">
	                            <a class="navbar-brand" href="#">
	                             <!--    <div class="icon fa fa-paper-plane"></div> -->
	                                <div class="title"><img src="../assets/logo.png" alt="" height="80%" ></div>
	                            </a>
	                            <button type="button" class="navbar-expand-toggle pull-right visible-xs">
	                                <i class="fa fa-times icon"></i>
	                            </button>
	                        </div>
	                        <ul class="nav navbar-nav">
	                            <li class="active">
	                                <a href="javascript:;;">
	                                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDk1MDE0Mzc0MDg0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0NTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTIzLjk0Njc0OCAyNzQuNjQ3MTk3bC0xOC45NDQ0NjggMTUuNTExMjc2djU1NS4xNTA3NzVDODgwLjMwNjgzMiA5MjEuNzczNzU3IDgzOS4wODM5NjUgOTU1LjQxMjkwMiA3NzUuNTU3MTE2IDk1NS40Mzg0ODVoLTMuMDk2NTI0Yy02My45MDc1MTktNC4wMzc5NjYtMTE1LjYyODQ4NC0zNy4zMTI4MTQtMTQ0Ljc2NTA4Mi0xMDkuMDk2NzIxVjI4OS44OTQ0NmwtMTguNzA2MDM3LTE5LjI2Njgxdi01NS4zNTI2NzhsMTUuNjM1MDk2IDAuMTkyMzgxaDI4Mi4yMjk4OTZsMTcuMDkxMjYgMC4xMDAyODR2NTkuMDc5NTZoMC4wMDEwMjN6IG0tMjU5LjQ1NDE3IDMzLjQ1NTk3M3Y1MzYuNjIzODE3YzE3Ljg4NTM0NiA0MC42MDc4NiA2NC41MTIyOTMgNjUuNjU1MzI2IDExMi4wODU3OTggNzMuOTc5OTIyIDM5LjMwODI2MS01LjY1NDc5IDcyLjA2MTIyMi0zMC4xMjkyMDQgOTEuMzM5Mjg4LTczLjQwMjc3N1YzMDguMTAzMTdINjY0LjQ5MjU3OHogbTE5LjE2NTUwMiAxODQuNTE1NDExSDg0OC40MzY5ODRsMS4wNTI5ODIgMS4wMzI1MTZ2MzMwLjk4NDI5NmMtOS43OTMwNCAzOS4zOTIxNzItMzYuNDY3NTYzIDc0LjY0NjA5NC03NC4yMjQ0OTIgNzQuNTI1MzQ0LTI5LjQ1OTk2Mi0yLjU4OTk4OC03Ny4yODQxNzctMzcuNTAwMDc5LTkyLjYzNTgxNy03My41MDEwMTRWNDkzLjY1MTA5N2wxLjAyODQyMy0xLjAzMjUxNnpNMjk1LjQyNzk4OCA2Ny41MTI2MjZoMjk0LjM5MDg2N2wxLjAyODQyMyAxLjAyODQyM3Y5MC43MjczNTFsLTEuMDI4NDIzIDEuMDI4NDIzaC0zNS42NTE5ODh2MjM2LjMzNzY4M2w1NC44MTMzOTYgMTA5LjAzMjI1MnY5Ny44MTk4ODZsLTEuMDI4NDIyIDEuMDI4NDIzLTkxLjU5MTAyMi0xOTQuNDMzMjk0VjE2MC40ODIwNDFIMzY4LjQ3NTY3N1Y0MDkuMDQ5MjU3TDE1Ny4zNTAyMTMgODMzLjkzMzE1M2MtNC44NDUzNTUgMTcuMzI2NjIxLTMuMjM4NzY0IDMwLjg4NjQ1MSAzLjY2NjUwNiA0MS44MTEyNjggNy42MzA3OTQgMTIuNzAxMjc3IDIyLjIxNTk3OCAxOS41NjI1NDUgNDQuOTExODg1IDI0LjEwODA3MWg0MzIuMTM5MTM4bDU2Ljg2MzA3OSA1Mi45NDI3OTMtMS4wNTQwMDUgMi4wNTY4NDVIMjAxLjc4OTMzMWMtNjYuOTE1MDE2LTIyLjI1NDg2My05Ny41ODY1NzItNTguNzQzOTE2LTkyLjAxMjYyNC0xMTkuODc5Mjk4IDAtOC4yMTcxNDkgMC43MDUwNTgtMTcuMTgwMjg4IDIuMDgzNDUyLTI2Ljg3NTA5bDIxOS41NzM4ODEtNDExLjQ2ODM1M1YxNTkuNzE3NjMxaC0zNS45OTc4NjZsLTEuMDI2Mzc2LTEuMDI4NDIyVjY4LjU0MTA0OWwxLjAxODE5LTEuMDI4NDIzeiBtMjQ1LjQ1OTQzNCA1MzYuMjU3NDc0bDY4LjQ0MDc2NSAxMzAuOTIzODQydjEyOC4zNzk5MDJsLTM0My41NzUwNTYgMC40NTEyNzhoLTQuMTQwMjk3Yy0zMS4yMzIzMjgtNi45Njg3MTUtNDcuNTUyMDE2LTM2LjkxMjcwMS00My4yMTIxNzQtNjcuODQ1MjAxIDEuMzcxMjMtNS41NzU5OTUgNC45NDg3MDktMTAuNDAzOTU0IDQuOTQ4NzA5LTE0LjQ1NzI3bDkwLjk4NDIwMS0xNzcuNDUyNTUxaDIyNi41NTM4NTJ6IiBwLWlkPSIxNDUyIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+" class="_wrapper__sidebar__nav__item-content--img"><span class="img_span">INTENT &nbsp;&nbsp;LAB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></span>
	                                 
	                                </a>
	                            </li>
	                        </ul>
	                    </div>
	                    <!-- /.navbar-collapse -->
	                </nav>
	            </div>
	            <!-- Main Content -->
	            <div class="container-fluid">
	                <div class="side_body" >
						<div class="select_div">
							<div class="select_box">
								<div class="select_box_img">
									<img src="../assets/intentlab.png" alt="">
									<div class="select_box_img__version">(Beta v2.1)</div>
								</div>
								<div class="reset-header">SETTINGS<!-- /react-text --><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDk1MDE0NDMwNzI1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwMDciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNzMxLjMwNTc3NSA2MzYuNzg4MDk4Yy04LjQwNDQxNC04LjIyMDIxOS0xOS43MjYyNzQtMTIuNzg5MjgxLTMwLjY5MS0xMy43MDIwNy0yMi42NTI5MjktMS44Mjc2MjUtNDUuNDg2OTg0LTEwLjQxNDE4Ny02Mi44NDQzMDQtMjcuNDA2MTg3LTE3LjM1MTE4LTE3LjE3MjEwMS0yNi42Njk0MDYtMzkuMjc4NTg1LTI3Ljc2MzMyLTYxLjc0OTM2Ni0wLjU0NzQ2OS0xMC45NjU3NDktNS40ODI4NzUtMjEuNzQxMTYzLTEzLjg4NzI4OC0zMC4xNDY2MDEtMTguNjMxMzM2LTE4LjQ1MjI1Ny00OS4xNDEyMS0xOC40NTIyNTctNjcuNzcyNTQ2IDBsLTI5Ljc3NzE4NyAyOS4yMzI3ODhMMTkwLjAxNTY4MSAyMzcuNTkyMjU2YzAgMC0xNC45NzYwODYtMTIuMjQwNzg5LTE3LjE3MDA1NS0yMy4zODc2NjMtMi41NTUxOTYtMTMuMzM1NzI2LTQuNzQ5MTY0LTMwLjUwODg1MS0xOS4xODM5MjEtNDIuOTMwNzY1LTI2LjMwMzA2My0yMi40NzM4NTEtNzAuMzI5Nzg4LTU3LjM2OTYxNS05Ny43MzE4ODItNzYuNTUwNDY3LTExLjUxMjE5NS04LjAzOTA5My0xOS41NTAyNjUtNi4zOTc3MS0yNy41ODgzMzUgMS42NDEzODNMNy4zMzYwODIgMTE3LjAxMTk5NGMtOC4wMzgwNyA3Ljg1Mjg1Mi05Ljg2NTY5NSAxNS43MDk3OTctMS42NDc1MjMgMjcuMDM3Nzk2IDE5LjM2NTA0NiAyNi44NTY2NzEgNTQuOTkwNDI4IDcwLjE1Mzc4IDc3LjgyNTUwNiA5NS45MTc1NiAxMi42MDcxMzIgMTQuMjQ5NTM5IDMwLjE0MzUzMSAxNi4yNTcyNjYgNDMuNjU5MzU5IDE4LjgxODYwMSAxMS4zMjU5NTMgMi4xODk4NzUgMjMuNzUxOTYgMTYuODA2NzgxIDIzLjc1MTk2IDE2LjgwNjc4MWwzMDAuODc2NTgyIDMwMy4wOTYxMzMtMjkuNzc3MTg3IDI5LjIzMzgxMWMtMTguODE3NTc4IDE4LjQ1MjI1Ny0xOC44MTc1NzggNDguMjMxNDkxIDAgNjYuNjg0NzcyIDguNTg1NTM5IDguNDA1NDM3IDE5LjU0NTE0OCAxMy4xNTQ2MDEgMzAuNjkxIDEzLjcwMjA3IDIyLjgzNDA1NSAxLjA5MzkxNCA0NS40ODY5ODQgMTAuMjMzMDYyIDYyLjg0MjI1NyAyNy4yMjMwMTUgMTcuMzU2Mjk2IDE2Ljk5MTk5OSAyNS45NDE4MzUgMzkuNDYxNzU3IDI3Ljc2OTQ2IDYxLjc0OTM2NiAwLjkxMzgxMiAxMC43ODA1MzEgNS40Nzc3NTggMjEuOTI3NDA1IDEzLjg4MjE3MiAzMC4xNDc2MjRsMTkxLjgxNzcyNCAxODguNTQ1MTljMzcuNDQ4OTE0IDM2LjkwNDUxNSA5OC4yODQ0NjcgMzYuOTA0NTE1IDEzNS43MzIzNTcgMGwzOC4xODE2MDEtMzcuNjM3MjAyYzM3LjQ0ODkxNC0zNi45MDQ1MTUgMzcuNDQ4OTE0LTk2LjQ2NTAyOSAwLTEzMy4zNjk1NDNMNzMxLjMwNTc3NSA2MzYuNzg4MDk4IDczMS4zMDU3NzUgNjM2Ljc4ODA5OHpNNzMxLjMwNTc3NSA2MzYuNzg4MDk4IiBwLWlkPSIxMDA4IiBmaWxsPSIjMkZEMEI1Ij48L3BhdGg+PHBhdGggZD0iTTEwMjMuMDQ5MzQ5IDIwMS40MTYzMzZsLTE3OS43NTgwNiA5Ny4wMTE0NzQtODEuODQxOTgzLTQ4Ljc3ODk2IDIuMDA3NzI3LTkzLjkwNDcxNyAxODYuMTU0NzQ3LTEwMC40ODU1OTljLTg2LjU5MTE0Ny03Ni4wMDQwMjEtMjE5Ljc2ODMwOS03My4wNzczNjYtMzAyLjg4OTQyNSA4LjU4NTUzOS01My4xNTc2ODcgNTIuMjU1MTMxLTczLjQzNTUyMyAxMjQuNDE2NjM4LTYxLjE5NTc1NyAxOTEuODM1MTIgMi45MjE1MzkgMTUuODk4MDg1LTEuMDk0OTM4IDMyLjUyMTY5NC0xNC42MTQ4NTkgNDUuODU3NDIxTDQ0NS43NzI2NDYgNDI0Ljg1ODMxNGw1Mi40MzAxMTYgNTAuMjQxMjY0IDAuMzY2MzQ0LTAuMzY3MzY3YzE2Ljk4ODkzLTE2LjYyMzYwOSAzOS42NDE4NTktMjUuOTM3NzQyIDYzLjc1NjA2OS0yNS45Mzc3NDJzNDYuNzY3MTQgOS4xMzMwMDggNjMuNzU4MTE2IDI1LjkzNzc0MmM4LjIxODE3MiA4LjIyNTMzNSAxNC43OTQ5NjEgMTcuNzI1NzEgMTkuMTc4ODA1IDI4LjEzODg3NGw2MC44MzQ1My01OS43Mzk1OTNjMTMuNzAxMDQ3LTEzLjUyMTk2OCAzMy4yNDYxOTUtMTguMDkyMDU0IDUwLjYwMjQ5Mi0xMy43MDMwOTMgNzAuMTQ3NjQgMTcuNTM5NDY4IDE0Ny40MjU2NzctNC41NjgwMzkgMjAyLjQxMDk4OS01OC42NDU2NzhDMTAwNi4yNDU2MzcgMzI0LjE5MDU2NyAxMDI3LjYxODQxMSAyNjIuMDc0ODU3IDEwMjMuMDQ5MzQ5IDIwMS40MTYzMzZMMTAyMy4wNDkzNDkgMjAxLjQxNjMzNnpNMTAyMy4wNDkzNDkgMjAxLjQxNjMzNiIgcC1pZD0iMTAwOSIgZmlsbD0iIzJGRDBCNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zOTIuMjQ3NTkyIDU3OC44NzQwODNsMC4zNjYzNDQtMC4zNjYzNDQtNTAuOTY4ODM1LTUxLjM0MTMxOUw0MS4xMjg3MjMgODIyLjIyNTUwN2MtMzguNTQyODI4IDM3LjgxOTM1LTM4LjU0MjgyOCA5OS4wMjUzNDEgMCAxMzYuODQ0NjkxIDM4LjU0ODk2OCAzNy44MTgzMjcgMTAwLjg0NDc3OSAzNy44MTgzMjcgMTM5LjM4ODYzMSAwbDI0MC41OTM2MTQtMjM2LjIzMTI1OWMtMTAuNDEyMTQxLTQuMzgyODItMjAuMjc3ODM2LTEwLjc4MDUzMS0yOC40OTcwMzEtMTguOTk5NzI2QzM1Ny4xNzI3NDkgNjY5LjQ4OTg5NCAzNTcuMTcyNzQ5IDYxMy40MDQ1MjggMzkyLjI0NzU5MiA1NzguODc0MDgzTDM5Mi4yNDc1OTIgNTc4Ljg3NDA4M3pNMzkyLjI0NzU5MiA1NzguODc0MDgzIiBwLWlkPSIxMDEwIiBmaWxsPSIjMkZEMEI1Ij48L3BhdGg+PC9zdmc+" alt="tools">
								</div>
								<div class="reset_main">
									<div class="reset_main_box">
										<p>Category</p>
										<select multiple="multiple" class="select_template" id="Category">
									        <option v-for="item in Lists.Category" v-bind:value="item.value">{{item.value}}</option>
									 
									    </select>
								    </div>
									<div class="reset_main_box">
										<p>Sub Category</p>
										<select multiple="multiple" class="select_template" id="SubCategory">
									        <option v-for="item in Lists.SubCategory" v-bind:value="item.value">{{item.value}}</option>
									        
									    </select>
								    </div>
								    <div class="reset_main_box">
										<p>Benefit</p>
										<select multiple="multiple" class="select_template" id="Benefit">
									       <option v-for="item in Lists.Benefit" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
								    <div class="reset_main_box">
										<p>Behavior</p>
										<select multiple="multiple" class="select_template" id="Behavior">
									       <option v-for="item in Lists.Behavior" v-bind:value="item.value">{{item.value}}</option>
									       
									    </select>
								    </div>
									<div class="reset_main_box">
										<p>Keyword type</p>
										<select multiple="multiple" class="select_template" id="keywordType">
									       <option v-for="item in Lists.keywordType" v-bind:value="item.value">{{item.value}}</option>
									       
									    </select>
								    </div>
								    <div class="reset_main_box">
										<p>Platform</p>
										<select multiple="multiple" class="select_template" id="Platform">
									       <option v-for="item in Lists.Platform" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
								    <div class="reset_main_box">
										<p>Category Price Range</p>
										<select multiple="multiple" class="select_template" id="CategoryPriceRange">
									       <option v-for="item in Lists.CategoryPriceRange" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
								    <div class="reset_main_box">
										<p>Category Price</p>
										<select multiple="multiple" class="select_template" id="CategoryPrice">
									       <option v-for="item in Lists.CategoryPrice" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
									<div class="reset_main_box">
										<p>Engine</p>
										<select multiple="multiple" class="select_template" id="Engine">
									       <option v-for="item in Lists.Engine" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
								    <div class="reset_main_box">
										<p>Engine Size</p>
										<select multiple="multiple" class="select_template" id="EngineSize">
									       <option v-for="item in Lists.EngineSize" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
								    <div class="reset_main_box">
										<p>Branded</p>
										<select multiple="multiple" class="select_template" id="Branded">
									       <option v-for="item in Lists.Branded" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
								    <div class="reset_main_box">
										<p>Model</p>
										<select multiple="multiple" class="select_template" id="Model">
									       <option v-for="item in Lists.Model" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
								    <div class="reset_main_box">
										<p>Brand Origin Region</p>
										<select multiple="multiple" class="select_template" id="BrandOriginRegion">
									       <option v-for="item in Lists.BrandOriginRegion" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
								    <div class="reset_main_box">
										<p>Brand Origin Country</p>
										<select multiple="multiple" class="select_template" id="BrandOriginCountry">
									       <option v-for="item in Lists.BrandOriginCountry" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
								    <div class="reset_main_box">
										<p>Gear Type</p>
										<select multiple="multiple" class="select_template" id="GearType">
									       <option v-for="item in Lists.GearType" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
								    <div class="reset_main_box">
										<p>Drive Type</p>
										<select multiple="multiple" class="select_template" id="DriveType">
									       <option v-for="item in Lists.DriveType" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
								    <div class="reset_main_box">
										<p>Seating Type</p>
										<select multiple="multiple" class="select_template" id="SeatingType">
									       <option v-for="item in Lists.SeatingType" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
								    <div class="reset_main_box">
										<p>Driving Features</p>
										<select multiple="multiple" class="select_template" id="DrivingFeatures">
									       <option v-for="item in Lists.DrivingFeatures" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
									<div class="reset_main_box">
										<p>Experience Features</p>
										<select multiple="multiple" class="select_template" id="ExperienceFeatures">
									       <option v-for="item in Lists.ExperienceFeatures" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
								    <div class="reset_main_box">
										<p>Life Stage</p>
										<select multiple="multiple" class="select_template" id="LifeStage">
									       <option v-for="item in Lists.LifeStage" v-bind:value="item.value">{{item.value}}</option>
									    </select>
								    </div>
								    <div class="reset_main_box" id="time_box">
								    	<p>Date</p>
								    	<input type="text" id="time">
									</div>
								</div>
								<div class="reset-footer">
									<span id="Confirm_btn" v-on:click="onChangeChart()"><i class="fa fa-search"></i> Confirm</span>
									
								</div>
								<div class="reset-footer" style="padding-top:10px;">
									
									<span id="Clear_btn" v-on:click="clearAll()"><i class="fa fa-trash"></i> Clear Selection</span>
								</div>
							</div>
						</div>
						<!-- chart_div -->
						<div class="chart_div">
							<div class="chart_div_title">Intent Lab</div>
							<!-- growth -->
							<div class="growth">
								<span class="span_title"><i class="fa fa-stop"></i>Growth
									<div class="_tip-popup u-ml5 tip" style="display: inline-block;">
									<i class="fa fa-exclamation-circle"></i>
									<div class="_tip-popup__content bottom" style="display: none;">Month on Month growth=(M – (M-1))/(M-1)</div>
									</div>
								</span>
						      <div class="_block-wrapper">
						        <div class="growth__items"><i class="fa fa-calendar"></i>
						          <div class="growth__item">
						            <div>Jan</div>
						            <div class="percent  negative">—</div>
						          </div>
						          <div class="growth__item">
						            <div>Feb</div>
						            <div class="percent">—</div>
						          </div>
						          <div class="growth__item">
						            <div>Mar</div>
						            <div class="percent">—</div>
						          </div>
						          <div class="growth__item">
						            <div>Apr</div>
						            <div class="percent">—</div>
						          </div>
						          <div class="growth__item">
						            <div>May</div>
						            <div class="percent">—</div>
						          </div>
						          <div class="growth__item">
						            <div>Jun</div>
						            <div class="percent">—</div>
						          </div>
						          <div class="growth__item">
						            <div>Jul</div>
						            <div class="percent">—</div>
						          </div>
						          <div class="growth__item">
						            <div>Aug</div>
						            <div class="percent">—</div>
						          </div>
						          <div class="growth__item">
						            <div>Sep</div>
						            <div class="percent">—</div>
						          </div>
						          <div class="growth__item">
						            <div>Oct</div>
						            <div class="percent">—</div>
						          </div>
						          <div class="growth__item">
						            <div>Nov</div>
						            <div class="percent">-</div>
						          </div>
						        </div>
						      </div>
						    </div>
						    <!-- search-trends -->
						    <div class="search-trends">
						    	<span class="u-flex-row span_title"><i class="fa fa-stop"></i>Search Volume Trends
						    		<div class="_tip-popup u-ml5 tip" style="display: inline-block;">
						    			<i class="fa fa-exclamation-circle" ></i>
						    			<div class="_tip-popup__content bottom" style="display: none;width:205px;">Monthly search volume based on keywords</div>
						    		</div>
						    		<div class="_checkbox u-mlauto" id="Compare" v-on:click="Compare">
						    			<label for="__undefined-1" class="_checkbox__label" >
						    				<div class="_checkbox__box" :class="{ searchActived : compareChecked }"><i class="fa fa-check" ></i></div>
						    				<span >Compare between <span style="color:#2FD0B5">MB</span> and PC</span>
						    			</label>
						    		</div>
						    	</span>
							    <div class="_block-wrapper">
							      <div class="customize-label">
							        <div class="customize-label-y">Search Volume</div>
							        <div class="customize-label-x">Date</div>
							      </div>
							    	<div class="customize-label" style="width:100%;z-index:0">
							         <div class="customize-label-y compare-taobao" >Taobao Index Trend</div>
							      </div>
							      <div>
							     		
							        	<Areaspline :id="chart_data.chart_1.id" :data="chart_data.chart_1.data" :loadChart="loadChart" class="chart_box"></Areaspline>
							        <!-- </div> -->
							        
							      </div>
							       
							     
							    </div>
						  	</div>
						  	<!-- trending-product -->
							<div class="trending-product">
							 	<span class="span_title"><i class="fa fa-stop"></i>Top 10 Trending Products
							 		<div class="_tip-popup u-ml5 tip" style="display: inline-block;"><i class="fa fa-exclamation-circle"></i>
							 			<div class="_tip-popup__content bottom" style="display: none;">Subcategories based on product types
							 			</div>
							 		</div>
							 	</span>
						        <div class="_block-wrapper">
						            <div class="customize-label">
						                <div class="customize-label-y">Trend Production</div>
						                <div class="customize-label-x">Date</div>
						            </div>
						            <div>
							        	<Area :id="chart_data.chart_2.id" :data="chart_data.chart_2.data" :loadChart="loadChart" class="chart_box"></Area>
							      	</div>
						        </div>
						    </div>
						    <!-- top-10 -->
						    <div class="top-10">
						        <div><span><i class="fa fa-stop"></i><!-- react-text: 347 -->Top 10 Behaviors<!-- /react-text --><div class="_tip-popup u-ml5 tip" style="display: inline-block;"><i class="fa fa-exclamation-circle"></i><div class="_tip-popup__content bottom" style="display: none;width:250px">Intentions from  determined from information contained within keywords</div></div></span>
						            <div class="_block-wrapper">
						                <div class="customize-label">
						                    <div class="customize-label-y">Top 10 Behaviors</div>
						                </div>
						                <div style="width:100%;">
						                	<Column class="chart_box1" :id="chart_data.chart_3_1.id" :data="chart_data.chart_3_1.data":loadChart="loadChart" ></Column>
						                </div>
						            </div>
						        </div>
						        <div><span><i class="fa fa-stop"></i><!-- react-text: 359 -->Top 10 Benefits<!-- /react-text --><div class="_tip-popup u-ml5 tip" style="display: inline-block;"><i class="fa fa-exclamation-circle"></i><div class="_tip-popup__content bottom" style="display: none;width:250px">Benefits determined from information contained within keywords</div></div></span>
						            <div class="_block-wrapper">
						                <div class="customize-label">
						                    <div class="customize-label-y">Top 10 Benefits</div>
						                </div>
						                <div style="width:100%;">
						                	<Bar class="chart_box1" :id="chart_data.chart_3_2.id" :data="chart_data.chart_3_2.data" :loadChart="loadChart"></Bar>
						                </div>
						            </div>
						        </div>
						    </div>
							<!-- keywords -->
							<div class="top-keywords">
								<span class="span_title"><i class="fa fa-stop"></i>Top 20 Keywords<div class="_tip-popup u-ml5 tip" style="display: inline-block;"><i class="fa fa-exclamation-circle"></i><div class="_tip-popup__content bottom" style="display: none;width:250px">Top 20 keywords, include all keyword types – updates with selected criteria</div></div></span>
						        <div class="_block-wrapper">
						            <div class="top-keywords__tables">
						                <table-Top :tableData='table_data.table1'></table-Top>
						                <table-Top :tableData='table_data.table2'></table-Top>
						                <table-Top :tableData='table_data.table3'></table-Top>
						                <table-Top :tableData='table_data.table4'></table-Top>
						            </div>
						        </div>
						    </div>
						    <!-- basic-brand -->
						    <div class="basic-brand">
						        <div>
						        	<span class="span_title"><i class="fa fa-stop"></i>Category Price Range Comparison
						        		<div class="_tip-popup u-ml5 tip" style="display: inline-block;">
						        			<i class="fa fa-exclamation-circle"></i>
						        			<div class="_tip-popup__content bottom" style="display: none;width:300px">Brand keywords classified into several categories based on key product sales price (Hover over the bar chart for further information)
						        			</div>
						        		</div>
						        	</span>
						            <div class="chart-wrapper">
						                <div class="_block-wrapper">
						                    <div class="grid-chart">
						                        
						                        <div class="grid-chart__chart__items">
						                        	<div v-for="(item,index) in BasicVSPremium.Basic" class="grid-chart__chart__items__item" v-bind:style="{width:item.percent,background : colorList[index] }" v-bind:title="item.name+':'+item.value | formatNum"></div>
						                            <!-- <div class="grid-chart__chart__items__item" style="background: rgb(74, 199, 220);" v-bind:style="{width:BasicVSPremium.Basic.data1_1.percent}"></div>
						                            <div class="grid-chart__chart__items__item" style="background: rgb(233, 108, 57);" v-bind:style="{width:BasicVSPremium.Basic.data1_2.percent}"></div>
						                            <div class="grid-chart__chart__items__item" style="background: rgb(47,208,181);" v-bind:style="{width:BasicVSPremium.Basic.data1_3.percent}"></div>
						                            <div class="grid-chart__chart__items__item" style="background: rgb(198,224,180);" v-bind:style="{width:BasicVSPremium.Basic.data1_4.percent}"></div>
						                             -->
						                        </div>
						                        <div class="grid-chart__chart__label">
						                        	<div v-for="(item,index) in BasicVSPremium.Basic" class="grid-chart__chart__label__item" v-bind:style="{color : colorList[index] }" >
						                        		{{item.name}}{{item.percent | formatPercent}}
						                        	</div>
						                           <!--  <div class="grid-chart__chart__label__item" style="color: rgb(74, 199, 220);">
						                               {{BasicVSPremium.Basic.data1_1.name}} {{BasicVSPremium.Basic.data1_1.percent | formatPercent}}
						                            </div>
						                            <div class="grid-chart__chart__label__item" style="color: rgb(233, 108, 57);">
						                                  {{BasicVSPremium.Basic.data1_2.name}} {{BasicVSPremium.Basic.data1_2.percent | formatPercent}}
						                            </div>
						                            <div class="grid-chart__chart__label__item" style="color: rgb(47,208,181);">
						                                  {{BasicVSPremium.Basic.data1_3.name }} {{BasicVSPremium.Basic.data1_3.percent | formatPercent}}
						                            </div>
						                            <div class="grid-chart__chart__label__item" style="color: rgb(198,224,180);">
						                                  {{BasicVSPremium.Basic.data1_4.name 	}} {{BasicVSPremium.Basic.data1_4.percent | formatPercent}}
						                            </div> -->
						                        </div>
						                    </div>
						                    <div class="customize-label">
						                        <div class="customize-label-y">Search Volumn</div>
						                        <div class="customize-label-x">Date</div>
						                    </div>
						                    <div style="width:100%;">
						                    	<line-Chart class="chart_box2" :id="chart_data.chart_4_1.id" :data="chart_data.chart_4_1.data" :loadChart="loadChart"></line-Chart>
						                    </div>
						                </div>
						            </div>
						        </div>
						        <div>
						        	<span class="span_title">
						        		<i class="fa fa-stop"></i>Brands VS. Non-Brands
						        		<div class="_tip-popup u-ml5 tip" style="display: inline-block;">
						        			<i class="fa fa-exclamation-circle"></i>
						        			<div class="_tip-popup__content bottom" style="display: none;width:250px">Brand keywords compared with non-Brand keywords covering all categories (Hover over the bar chart for further information)
						        			</div>
						        		</div>
						        	</span>
						            <div class="chart-wrapper labcharts-pie__chart__right">
						                <div class="_block-wrapper">
						                    <div class="grid-chart">
						                      
						                        <div class="grid-chart__chart__items">
						                        	<div v-for="(item,index) in BasicVSPremium.Brand" class="grid-chart__chart__items__item" v-bind:style="{width:item.percent,background : colorList[index] }" v-bind:title="item.name+':'+item.value | formatNum"></div>
						                           
						                        </div>
						                        <div class="grid-chart__chart__label">
						                        	<div v-for="(item,index) in BasicVSPremium.Brand" class="grid-chart__chart__label__item" v-bind:style="{color : colorList[index] }">
						                        		{{item.name}}{{item.value | formatNum}} {{item.percent | formatPercent}}
						                        	</div>

						                            
						                        </div>
						                    </div>
						                    <div class="customize-label">
						                        <div class="customize-label-y">Brands VS. Non-Brands</div>
						                        <div class="customize-label-x">Date</div>
						                    </div>
						                    <div style="width:100%;">
						                    	<line-Chart class="chart_box2" :id="chart_data.chart_4_2.id" :data="chart_data.chart_4_2.data" :loadChart="loadChart"></line-Chart>
						                    </div>
						                </div>
						            </div>
						        </div>
						    </div>
						    <!-- brand-comparison -->
							 <div class="brand-comparison">
						        <div>
						        	<span class="span_title"><i class="fa fa-stop"></i>Brand Comparison
						        		<div class="_tip-popup u-ml5 tip" style="display: inline-block;"><i class="fa fa-exclamation-circle"></i>
						        			<div class="_tip-popup__content bottom" style="display: none;width:300px;">Comparison between keywords grouped by brands based on brand specific information contained within the keyword
						        			</div>
						        		</div>
						        	</span>
						            <div class="chart-wrapper">
						                <div class="_block-wrapper" style="width:100%;">
						                    <div class="brand-comparison__controler">
						                        <div class="brand-comparison__controler_box">
						                        	
													<el-select v-model="options1_selected" placeholder="请选择" id="select1" v-on:change="changeBrand()">
	    												<el-option v-for="item in options1" :key="item.value" :label="item.value" :value="item.value" :disabled="item.disabled" >
	    												</el-option>
	    											</el-select> 
											    </div>
											    <div class="brand-comparison__controler_box">
											    	<span>VS.</span>
											    </div>
											    <div class="brand-comparison__controler_box">
												    <el-select v-model="options2_selected" placeholder="请选择" id="select2" v-on:change="changeBrand()">
	    												<el-option v-for="item in options2" :key="item.value" :label="item.value" :value="item.value" :disabled="item.disabled">
	    												</el-option>
	    											</el-select> 
    											</div>
						                    </div>
						                    <div class="brand-comparison__pie-chart" data-highcharts-chart="17">
						                        <Pie class="chart_box_brand_comparison" :id="chart_data.chart_5_1.id" :data="chart_data.chart_5_1.data" :loadChart="loadChart"></Pie>	
						                    </div>
						                    <div class="brand-comparison__line-chart">
						                        <div class="customize-label">
						                            <div class="customize-label-y">Search Volume</div>
						                            <div class="customize-label-x" style="z-index:1">Date</div>
						                        </div>
						                        <div data-highcharts-chart="18">
						                            <line-Chart class="chart_box_brand_comparison1" :id="chart_data.chart_5_2.id" 
						                            :data="chart_data.chart_5_2.data" :loadChart="loadChart"></line-Chart>
						                        </div>
						                    </div>
						                </div>
						            </div>
						        </div>
						    </div>
	
						    <!-- competitive-landscape -->
						    <div class="competitive-landscape">
						        <div class="competitive-landscape__title">
						            COMPETITIVE LANDSCAPE
						          
						            <div class="_tip-popup u-ml5 tip" style="display: inline-block;"><i class="fa fa-exclamation-circle"></i>
						                <div class="_tip-popup__content bottom" style="display: none;width:370px">Frequency of ad appeared in SEM collated to determine share of search among home and competitor brands, based on common generic keywords covering all categories. (Mouse drag to zoom in specific area) </div>
						            </div>
						        </div>
						        <div class="_block-wrapper">
						            <div style="width:100%;">
						                  <Bubble class="chart_box3" :id="chart_data.chart_6.id" :data="chart_data.chart_6.data" :loadChart="loadChart"></Bubble>  	
						             </div>
						        </div>
						    </div>
						</div>
	                </div>
	            </div>
	        </div>
	       
	    </div>
	    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog" style="margin:15% auto">
				<div class="modal-content" >
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
							&times;
						</button>
						<h1 class="modal-title" id="myModalLabel">
							切换品牌
						</h1>
					</div>
					<div class="modal-body">
						 <div class="_modal__content">
						      <div class="content">
						        <label>选择品牌</label>
						        <div class="_site-header__brands_modal__content">
						          <div class="_search-input green normal">
						            <input type="text" placeholder="搜索"><i class="fa fa-search"></i></div>
						          <div class="_site-header__brands_modal__content__brands">
						            <div class="_radio-group u-display-flex">
						              <div class="_radio u-mr10">
						                 <!--  <input type="radio" name="brand" value="BMW" id="BMW" v-model="brand_checked"><label for="BMW">BMW</label> -->
										<el-radio v-model="brand_checked" label="BMW">BMW</el-radio>
						              </div>
						            </div>
						          </div>
						        </div>
						      </div>
						    </div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary"  style="background:#f6b454;border-color:#f6b454;width:64px">
							确定
						</button>
						<button type="button" class="btn btn-default" data-dismiss="modal" id="modal_cancel" v-on:click="cancel()" style="background:white;color:#f6b454;border-color:#f6b454;width:64px">Cancel
						</button>
						
					</div>
				</div><!-- /.modal-content -->
			</div><!-- /.modal -->
		</div>
    </div>
</template>


<script>
// require("script!./multiple-select.js"); 
var multipleSelect = require("exports-loader?window.multipleSelect!./multiple-select.js")
import DateRangePicker from '../../static/js/daterangepicker'
//chart组件
import Areaspline from '@/components/Areaspline.vue'
import Area from '@/components/Area.vue'
import Column from '@/components/Column.vue'
import Bar from '@/components/Bar.vue'
import tableTop from '@/components/table.vue'
import lineChart from '@/components/Line.vue'
import Bubble from '@/components/Bubble.vue'
import Pie from '@/components/Pie.vue'




import options from '@/chart-options/options'
import options1 from '@/chart-options/options1'
import options2 from '@/chart-options/options2'
import options3 from '@/chart-options/options3'
import options4 from '@/chart-options/options4'
import options_table from '@/chart-options/options_table'



export default {
  name: 'Home',
  data () {
    return {
	      brand_checked:'',
	      compareChecked:false,
	      compareNum:0,
	      compareData:{
	      	compare1:{},
	      	compare2:{}
	      },
	      BasicVSPremium:{
	      	Basic:[
	      		{
	      			name: "",
		      		value: 0,
		      		percent: "" 
	      		}
	      	],
	      	Brand:[
	      		{
	      			name: "",
		      		value: 0,
		      		percent: ""
	      		}
	      	]
	      },
	      chart_data:{
	      	chart_1:{
	      		id: 'chart_1',
	      		data: "",
	      	},
	      	chart_2:{
	      		id: 'chart_2',
	      		data: "",
	      	},
	      	chart_3_1:{
	      		id: 'chart_3_1',
	      		data: "",
	      	},
	      	chart_3_2:{
	      		id: 'chart_3_2',
	      		data: "",
	      	},
	      	chart_4_1:{
	      		id: 'chart_4_1',
	      		data: "",
	      	},
	      	chart_4_2:{
	      		id: 'chart_4_2',
	      		data: "",
	      	},
	      	chart_5_1:{
	      		id: 'chart_5_1',
	      		data: '',
	      	},
	      	chart_5_2:{
	      		id: 'chart_5_2',
	      		data: "",
	      	},
	      	chart_6:{
	      		id: 'chart_6',
	      		data: '',
	      	},

	      },
	      table_data:{
	      	table1:"",
	      	table2:"",
	      	table3:"",
	      	table4:""      
	      },
	      options1: [],
	      options2: [],
	      options1_selected:"",
	      options2_selected:"",
	      Lists:{
	      	  Category:[],
			  SubCategory:[],
			  Benefit:[],
			  Behavior:[],
			  keywordType:[],
			  Platform:[],
			  CategoryPriceRange:[],
			  CategoryPrice:[],
			  Engine:[],
			  EngineSize:[],
			  Branded:[],
			  Model:[],
			  BrandOriginRegion:[],
			  BrandOriginCountry:[],
			  GearType:[],
			  DriveType:[],
			  SeatingType:[],
			  DrivingFeatures:[],
			  ExperienceFeatures:[],
			  LifeStage:[]
	      },
		 select_data:{
		 	  Category:"All",
			  SubCategory:"All",
			  Benefit:"All",
			  Behavior:"All",
			  KeywordType:"All",
			  Platform:"All",
			  Brand:"All",
			  StartDate:"",
			  EndDate:"",
			  domain:"yiche.com ",
			  CategoryPriceRange:"All",
			  CategoryPrice:"All",
			  Engine:"All",
			  EngineSize:"All",
			  Branded:"All",
			  Model:"All",
			  BrandOriginRegion:"All",
			  BrandOriginCountry:"All",
			  GearType:"All",
			  DriveType:"All",
			  SeatingType:"All",
			  DrivingFeatures:"All",
			  ExperienceFeatures:"All",
			  LifeStage:"All"
		 },
		  select_brand_data:{
			Category:"All",
			Brand:"All",
			SubCategory:"All",
			Benefit:"All",
			Behavior:"All",
			KeywordType:"All",
			Platform:"All",
			CategoryPriceRange:"All",
			CategoryPrice:"All",
			Engine:"All",
			EngineSize:"All",
			Branded:"All",
			Model:"All",
			BrandOriginRegion:"All",
			BrandOriginCountry:"All",
			GearType:"All",
			DriveType:"All",
			SeatingType:"All",
			DrivingFeatures:"All",
			ExperienceFeatures:"All",
			LifeStage:"All",
			StartDate:"",
		  	EndDate:"",
		  },
		  loadChart:false,
		  colorList:['rgb(74, 199, 220)','rgb(233, 108, 57)','rgb(47,208,181)','rgb(198,224,180)']
    }
  },
  components: {
    Areaspline,
    Area,
    Column,
    Bar,
    tableTop,
    lineChart,
    Bubble,
    Pie
  },
  filters: {
        formatNum: function(value) {
          var reg=/\d{1,3}(?=(\d{3})+$)/g;   
          return (value + '').replace(reg, '$&,'); 
            
        },
        formatPercent:function(value){
        	return '('+value+')'
        }
  },
  mounted: function() {
  		//loading
  		

        $("#Brand1").multipleSelect({
        	single: true
        })

        $("#Brand2").multipleSelect({
        	single: true
        })
        //时间范围选择框
        var locale = {  
				"format": 'YYYY-MM-DD',  
				"separator": " to ",
		}; 

        $('#time').daterangepicker({
        		"locale": locale,
        		'showDropdowns': false,  
           		'showWeekNumbers': false,  
				"ranges" : {  
				'Last 6 Months': [moment().subtract(6, "months").format("YYYY-MM")],  
				'Last Year': [moment().subtract(1, "year").startOf("year").format("YYYY-MM"),moment().subtract(1, "year").endOf("year").format("YYYY-MM")],  
				'This Year': [moment().startOf("year").format("YYYY-MM"), moment().endOf("year").format("YYYY-MM")]
				},  
				"opens":"right",  
				"timePicker":false,  
				'applyClass':'apply_class',
				"startDate":moment().subtract(11, 'days').format('YYYY-MM-DD'),
    			"endDate":moment().subtract(2, 'days').format('YYYY-MM-DD')
				
        })
        
        var _this= this

        $('#time').on('apply.daterangepicker',function(ev, picker) {

			_this.onChangeChart()

		});
    this.$nextTick(function() {
    	
      this.load();
       
     
      // setTimeout(() => {
      //     loadingInstance.close();
      //   }, 1000);

      	   
    })
  },
  methods:{
  	load:function(){

  		

  		$(".navbar-expand-toggle").click(function() {
	        $(".app-container").toggleClass("expanded");
	        return $(".navbar-expand-toggle").toggleClass("fa-rotate-90");
	    });

	    $("#User").click(function(){
	    	$("#User_box").fadeToggle()
	    })

	    $("._tip-popup.u-ml5.tip").hover(function(){
	    	$(this).children('._tip-popup__content.bottom').show()
	    },function(){
	    	$(this).children('._tip-popup__content.bottom').hide()

	    })

	    // 下拉选项
        this.$http({
            method:'get',
            url:'http://114.55.92.124:7070/BMW/OnloadSelection.do',
        }).then(response =>{
            this.Lists = response.data;
            var _this = this
            this.$nextTick(function() {
            	$(".select_template").multipleSelect({
		            filter: true,
		            selectAllText:'All',
		            maxHeight:'150',
		            // onClose: function() {
		            // }
		        });
		       $("select").multipleSelect('checkAll')
            })
        })





        //onload chart

        let loadingInstance = this.$loading({
          fullscreen:true,
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });


        this.$http({
            method:'get',
          	// url:'http://114.55.92.124:7070/BMW/SessionControlServlet.do',
            url:'http://114.55.92.124:7070/BMW/SessionControlServlet.do',
            withCredentials: true
        }).then(response =>{
          
        })

        let timePicker = $("#time").val();
  		let startDate = $("#time").val().split(" to ")[0];
  		let endDate= $("#time").val().split(" to ")[1];
  		this.select_data.StartDate = startDate;
  		this.select_data.EndDate = endDate;

        var  _this = this;
		this.$http.all(
        	[
        	this.getOnlySearchVolumeTrends(),
        	this.getSearchVolumeTrends(),
        	this.getTop10TrendingProducts(),
        	this.getTop10BehaviorsBenefits(),
        	]
        ).then(this.$http.spread(function (arr1, arr2,arr3,arr4) {
				// searchVolume        	
			   _this.chart_data.chart_1.data = arr1.data.OnlysearchVolumeTrends;
			   _this.compareData.compare1 = arr1.data.OnlysearchVolumeTrends;
			   _this.compareData.compare2 = arr2.data.searchVolumeTrends;


			   // Top10TrendingProducts
			   _this.chart_data.chart_2.data = arr3.data.Top10TrendingProducts;

			   // Top10BehaviorsBenefits
			   _this.chart_data.chart_3_1.data = arr4.data.Top10Behaviors;
			   _this.chart_data.chart_3_2.data = arr4.data.Top10Benefits;

			  
			   _this.selectDisabled();
			   _this.selectDisabled1();

			   loadingInstance.close();
 		}))
       


        this.$http.all(
        	[
        	this.getTop20Keywords(),
        	this.getBasicVSPremiumAndBrandsVSNonBrands(),
        	this.getBrandComparison(),
        	this.getCompetitiveLandscape(),
        	this.getBrandSelect()
        	]
        ).then(this.$http.spread(function (arr5,arr6,arr7,arr8,arr9) {
				
			   //table_data
			   _this.table_data.table1= arr5.data.Top20Keywords[0]
			   _this.table_data.table2= arr5.data.Top20Keywords[1]
			   _this.table_data.table3= arr5.data.Top20Keywords[2]
			   _this.table_data.table4= arr5.data.Top20Keywords[3]

			   // BasicVSPremiumAndBrandsVSNonBrands
			   _this.chart_data.chart_4_1.data = arr6.data.BasicVSPremium;
			   _this.chart_data.chart_4_2.data = arr6.data.BrandsVSNonBrands;
			   _this.BasicVSPremium.Basic = arr6.data.TitleBasicVSPremium.data;
			   _this.BasicVSPremium.Brand = arr6.data.TitleBrandsVSNonBrands.data;

			   // BrandComparison
			   _this.chart_data.chart_5_1.data = arr7.data.BrandComparisonPieChart;
			   _this.chart_data.chart_5_2.data = arr7.data.BrandComparisonLineChart;


			   // CompetitiveLandscape
			   _this.chart_data.chart_6.data = arr8.data.CompetitiveLandscape;

			   _this.options1 = arr9.data.BrandSelect

			   _this.options2 = arr9.data.BrandSelect1

			   _this.options1_selected =arr9.data.BrandSelect[0].value;
			   _this.options2_selected = arr9.data.BrandSelect1[1].value;

			   _this.selectDisabled();
			   _this.selectDisabled1();

			  
 		}))
        


  	},
  	cancel:function(){
	    this.brand_checked=''
  	},
  	clearAll:function(){
  		$("select").multipleSelect('checkAll');
		this.onChangeChart()

  	},
  	Compare(){
  		this.compareChecked = !this.compareChecked;
  		
  		if(this.compareNum == 1){
  			this.compareNum = 0
  			this.chart_data.chart_1.data =  this.compareData.compare1;
  			
  		}else if(this.compareNum == 0){
  			this.compareNum = 1
  			this.chart_data.chart_1.data =  this.compareData.compare2;
  			
  		}

  	},
  	onChangeChart(){
  		this.BasicVSPremium={
      	Basic:[
      		{
      			name: "",
	      		value: 0,
	      		percent: "" 
      		}
      	],
      	Brand:[
      		{
      			name: "",
	      		value: 0,
	      		percent: ""
      		}
      	]
      };

  		 this.chart_data={
      	chart_1:{
      		id: 'chart_1',
      		data: "",
      	},
      	chart_2:{
      		id: 'chart_2',
      		data: "",
      	},
      	chart_3_1:{
      		id: 'chart_3_1',
      		data: "",
      	},
      	chart_3_2:{
      		id: 'chart_3_2',
      		data: "",
      	},
      	chart_4_1:{
      		id: 'chart_4_1',
      		data: "",
      	},
      	chart_4_2:{
      		id: 'chart_4_2',
      		data: "",
      	},
      	chart_5_1:{
      		id: 'chart_5_1',
      		data: '',
      	},
      	chart_5_2:{
      		id: 'chart_5_2',
      		data: "",
      	},
      	chart_6:{
      		id: 'chart_6',
      		data: '',
      	},

      };
      this.table_data={
      	table1:"",
      	table2:"",
      	table3:"",
      	table4:""      
      }

      this.loadChart = true
  		
  		let timePicker = $("#time").val();
  		let startDate = $("#time").val().split(" to ")[0];
  		let endDate= $("#time").val().split(" to ")[1];
  		this.select_data.StartDate = startDate;
  		this.select_data.EndDate = endDate;
  		var _this = this;

  		this.getSelectsed()

  		let loadingInstance = this.$loading({fullscreen:true,lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
  		
  		this.$http.all(
        	[
        	this.getOnlySearchVolumeTrends(),
        	this.getSearchVolumeTrends(),
        	this.getTop10TrendingProducts(),
        	this.getTop10BehaviorsBenefits(),
        	]
        ).then(this.$http.spread(function (arr1, arr2,arr3,arr4) {

        		_this.loadChart = false
        		// searchVolume  

        	
        			_this.compareData.compare1 = arr1.data.OnlysearchVolumeTrends;
			   		_this.compareData.compare2 = arr2.data.searchVolumeTrends;
					if(_this.compareNum ==1){
					  _this.chart_data.chart_1.data = arr2.data.searchVolumeTrends;
					}else if(_this.compareNum == 0){
						_this.chart_data.chart_1.data = arr1.data.OnlysearchVolumeTrends;
					}   
        		
     //    			_this.compareData.compare1 = "";
			  //  		_this.compareData.compare2 = "";

			  //  		if(_this.compareNum ==1){
					//   _this.chart_data.chart_1.data = "";
					// }else if(_this.compareNum == 0){
					// 	_this.chart_data.chart_1.data = "";
					// } 
        		
				
			   	

			   // Top10TrendingProducts
			 
				   _this.chart_data.chart_2.data = arr3.data.Top10TrendingProducts;
			
				   // _this.chart_data.chart_2.data =""
        			
        		

			   // Top10BehaviorsBenefits
			  
				   _this.chart_data.chart_3_1.data = arr4.data.Top10Behaviors;
				   _this.chart_data.chart_3_2.data = arr4.data.Top10Benefits;
				
				   // _this.chart_data.chart_3_1.data = "";
				   // _this.chart_data.chart_3_2.data = "";
        		
			   
			    _this.selectDisabled();
		   		_this.selectDisabled1();
				

			   loadingInstance.close();

 		}))

		this.$http.all(
        	[
    
        	this.getTop20Keywords(),
        	this.getBasicVSPremiumAndBrandsVSNonBrands(),
        	this.getBrandComparison(),
        	this.getCompetitiveLandscape(),
        	this.getBrandSelect()
        	]
        ).then(this.$http.spread(function (arr5,arr6,arr7,arr8,arr9) {
        	 	_this.loadChart = false
			   //table_data

			 
				   _this.table_data.table1= arr5.data.Top20Keywords[0]
				   _this.table_data.table2= arr5.data.Top20Keywords[1]
				   _this.table_data.table3= arr5.data.Top20Keywords[2]
				   _this.table_data.table4= arr5.data.Top20Keywords[3]
				
       //  			 _this.table_data.table1= ""
				   // _this.table_data.table2= ""
				   // _this.table_data.table3= ""
				   // _this.table_data.table4= ""
        		

			   // BasicVSPremiumAndBrandsVSNonBrands
			 
				   _this.chart_data.chart_4_1.data = arr6.data.BasicVSPremium;
				   _this.chart_data.chart_4_2.data = arr6.data.BrandsVSNonBrands;
				   _this.BasicVSPremium.Basic = arr6.data.TitleBasicVSPremium.data;
				   _this.BasicVSPremium.Brand = arr6.data.TitleBrandsVSNonBrands.data;
				
     //    		  _this.chart_data.chart_4_1.data = "";
				 //   _this.chart_data.chart_4_2.data = "";
				 //  _this.BasicVSPremium = {
					//   Basic: {
					//     data1_1:{
			  //     			name: "",
				 //      		value: 0,
				 //      		percent: "" 
			  //     		},
			  //     		data1_2:{
			  //     			name: "",
				 //      		value: 0,
				 //      		percent: ""
			  //     		},
			  //     		data1_3:{
			  //     			name: "",
				 //      		value: 0,
				 //      		percent: "" 
			  //     		},
			  //     		data1_4:{
			  //     			name: "",
				 //      		value: 0,
				 //      		percent: ""
			  //     		}
					//   },
					//   Brand: {
					//     data3_1: {
					//       name: "",
					//       value: 0,
					//       percent: ""
					//     },
					//     data3_2: {
					//       name: "",
					//       value: 0,
					//       percent: ""
					//     }
					//   }
					// }
				   // _this.BasicVSPremium.Brand = "";

				   // alert("sdd")
        		

			   // BrandComparison
			
				   _this.chart_data.chart_5_1.data = arr7.data.BrandComparisonPieChart;
				   _this.chart_data.chart_5_2.data = arr7.data.BrandComparisonLineChart;
			
				
       //  			  _this.chart_data.chart_5_1.data = "";
				   // _this.chart_data.chart_5_2.data = "";
        		


			   // CompetitiveLandscape
			  
				   _this.chart_data.chart_6.data = arr8.data.CompetitiveLandscape;
				
				   // _this.chart_data.chart_6.data = "";
        			
        		

				
				   _this.options1 = arr9.data.BrandSelect

				   _this.options2 = arr9.data.BrandSelect1

				   _this.options1_selected =arr9.data.BrandSelect[0].value;
				   _this.options2_selected = arr9.data.BrandSelect1[1].value;

				    _this.selectDisabled();
			   		_this.selectDisabled1();
			
       //  			 _this.options1 = ""

				   // _this.options2 = ""

				   // _this.options1_selected =""
				   // _this.options2_selected = "";

				   //  _this.selectDisabled();
			   	// 	_this.selectDisabled1();
        		

 		}))
  		
  	},
  	getSelectsed(){
  		var _this = this;
  		_this.select_data.Category=$("#Category").multipleSelect("getSelects").toString()
    	_this.select_data.SubCategory=$("#SubCategory").multipleSelect("getSelects").toString()
    	_this.select_data.Benefit=$("#Benefit").multipleSelect("getSelects").toString()
    	_this.select_data.Behavior=$("#Behavior").multipleSelect("getSelects").toString()
    	_this.select_data.KeywordType=$("#keywordType").multipleSelect("getSelects").toString()
    	_this.select_data.Platform=$("#Platform").multipleSelect("getSelects").toString()
    	_this.select_data.CategoryPriceRange=$("#CategoryPriceRange").multipleSelect("getSelects").toString()
    	_this.select_data.CategoryPrice=$("#CategoryPrice").multipleSelect("getSelects").toString()
    	_this.select_data.Engine=$("#Engine").multipleSelect("getSelects").toString()
    	_this.select_data.EngineSize=$("#EngineSize").multipleSelect("getSelects").toString()
    	_this.select_data.Branded=$("#Branded").multipleSelect("getSelects").toString()
    	_this.select_data.Model=$("#Model").multipleSelect("getSelects").toString()
    	_this.select_data.BrandOriginRegion=$("#BrandOriginRegion").multipleSelect("getSelects").toString()
    	_this.select_data.BrandOriginCountry=$("#BrandOriginCountry").multipleSelect("getSelects").toString()
    	_this.select_data.GearType=$("#GearType").multipleSelect("getSelects").toString()
    	_this.select_data.DriveType=$("#DriveType").multipleSelect("getSelects").toString()
    	_this.select_data.SeatingType=$("#SeatingType").multipleSelect("getSelects").toString()
    	_this.select_data.DrivingFeatures=$("#DrivingFeatures").multipleSelect("getSelects").toString()
    	_this.select_data.ExperienceFeatures=$("#ExperienceFeatures").multipleSelect("getSelects").toString()
    	_this.select_data.LifeStage=$("#LifeStage").multipleSelect("getSelects").toString()

  	},
  	getOnlySearchVolumeTrends(){
  		return this.$http({
            method:'post',
            url:'http://114.55.92.124:7070/BMW/getOnlySearchVolumeTrends.do',
            data:this.select_data
        })
  	},
  	getSearchVolumeTrends(){
  		return this.$http({
            method:'post',
            url:'http://114.55.92.124:7070/BMW/getSearchVolumeTrends.do',
            data:this.select_data
        })
  	},
  	getTop10TrendingProducts(){
  		return this.$http({
            method:'post',
            url:'http://114.55.92.124:7070/BMW/getTop10TrendingProducts.do',
            data:this.select_data
        })
  	},
  	getTop10BehaviorsBenefits(){
  		return this.$http({
            method:'post',
            url:'http://114.55.92.124:7070/BMW/getTop10BehaviorsBenefits.do',
            data:this.select_data
        })
  	},
  	getTop20Keywords(){
  		return this.$http({
            method:'post',
            url:'http://114.55.92.124:7070/BMW/getTop20Keywords.do',
            data:this.select_data
        })
  	},
  	getBasicVSPremiumAndBrandsVSNonBrands(){
  		return this.$http({
            method:'post',
            url:'http://114.55.92.124:7070/BMW/getBasicVSPremiumAndBrandsVSNonBrands.do',
            data:this.select_data
        })
  	},
  	getBrandComparison(){
  		return this.$http({
            method:'post',
            url:'http://114.55.92.124:7070/BMW/getBrandComparison.do',
            data:this.select_data
        })
  	},
  	getCompetitiveLandscape(){
  		return this.$http({
            method:'post',
            url:'http://114.55.92.124:7070/BMW/getCompetitiveLandscape.do',
            data:this.select_data
        })
  	},
  	getBrandSelect(){
  		return this.$http({
            method:'post',
            url:'http://114.55.92.124:7070/BMW/getBrandSelect.do',
            data:this.select_data
        })
  	},
  	changeBrand(){
  		var _this = this
  		this.selectDisabled();
  		this.selectDisabled1();
  		this.select_brand_data.Brand = this.options1_selected+','+this.options2_selected
  		let timePicker = $("#time").val();
  		let startDate = $("#time").val().split(" to ")[0];
  		let endDate= $("#time").val().split(" to ")[1];
  		this.select_brand_data.StartDate = startDate;
  		this.select_brand_data.EndDate = endDate;
  		this.$http({
                    method:'post',
                    url:'http://114.55.92.124:7070/BMW/getBrandComparison.do',
                    data:this.select_brand_data
                }).then(response =>{
                  this.chart_data.chart_5_1.data = _this.sort_pie(response.data.BrandComparisonPieChart);
			 	this.chart_data.chart_5_2.data = _this.sort_line(response.data.BrandComparisonLineChart);    
         })

  	},
  	selectDisabled(){
  		var _this = this
  		$.each(this.options1,function(index,select) {
			if(select.value == _this.options2_selected){
				select.disabled =true
			}else{
				select.disabled =false
			}
		});
  	},
  	selectDisabled1(){
  		var _this = this
  		$.each(this.options2,function(index,select) {
			if(select.value == _this.options1_selected){
				select.disabled =true
			}else{
				select.disabled =false
			}
		});
  	},
  	logout(){
  		this.$http({
                    method:'post',
                    url:'http://114.55.92.124:7070/BMW/LoginServlet.do',
                    data:{
                        'adminv':"",
                        'passv':"",
                        'type':'Logout'
                    }
                }).then(response =>{
                    if(response.data == true){
                      this.$router.push({path:'/'})
                    }
                })
  		
  	},
  	sort_pie(data){
  		let data1 = data.series[0].data[0];
  		let data2 =data.series[0].data[1];

  		if(data2.name == this.options1_selected){
  			data.series[0].data[0] = data2;
  			data.series[0].data[1] = data1;
  		}
  		console.log(data)
  		return data

   	},
   	sort_line(data){
  		let data1 = data.series[0];
  		let data2 =data.series[1];

  		if(data2.name == this.options1_selected){
  			data.series[0] = data2;
  			data.series[1] = data1;
  		}
  		console.log(data)
  		return data

   	}

  }
}
</script>

<style>
@import './../../static/css/home.css';

</style>