*API 명세서*

------- 수정사항 -------


api/surveyOB/list - [get] 객관식설문항목 목록 surveyobMapper.findByYear(surveyOb)로 반환
api/surveySQ/list - [get] 객관식설문항목 목록 surveysqMapper.findByYear(surveySQ)로 반환

api/mentoroom/create - 멘토방 insert [post] return으로 mentoroom_id를 받는다

api/mentoroom/create/{r_id}/{kind} - 사진, 자격증명파일 업로드 [post] - r_id:룸아이디, kind: 2(사진), 3(자격증명파일) / return값 없음

api/survey/object/result - 객관식 결과 -> 설문조사 질문과 퍼센티지를 같이 보내줌

api/admin/report_date/create - 보고서 제출 기간 등록 [post] reportDate(report_start, report_end)를 배열로 받아와서 삽입한다.

api/admin/report_date - 보고서 제출 기간 데이터 [get] - list로 리턴


---------------------


<게시판> (bid-보드아이디(1.설명소개서 2.공지사항 3.Q&A게시판), aid-게시글아이디, cid-댓글아이디)

api/article/list/:bid - 게시판 목록 [get] board_id를 받아와 리스트 리턴
   
api/article/list/:a_id/:u_id - 게시글 보기 [get] article_id를 받아와 user_id를 받아와 article_writer와 비교후 조회수 증가
   
api/article/create - 게시글쓰기 [post] article객체를 받아와 insert
   
api/article/:aid/delete - 게시글 삭제 [get] article_id를 받아와 삭제
   
api/article/edit - 게시글 수정 [post] article객체(id, article_title, article_content)를 받아와 update

api/comment/create - 댓글생성 [post] -> comment([insert] id, comment_content)

api/comment/edit - 댓글수정[post] -> comment([update] id, comment_content)

api/comment/delete/:c_id - 댓글 삭제[get] -> comment의 id를 받아와 delete. 

api/comment/list/{a_id} - 댓글 목록 [get] -> article_id로 List 반환

api/CntComment/{a_id} - 댓글수 조회 [get] -> commentMapper.CntComment에서 article_id로 댓글수조회에서 int로 반환 
    

<멘토방> (rid->mentoroom_id)
  
api/mentoroom - 멘토방목록  [get] mentoroom의 모든 디비를 리스트 형식으로 긁어옴.
 
api/mentoroom/create - 멘토신청 [post] 입력폼에 입력된 데이터를 mentoroom객체로 받아옴. 학기와 년도는 date타입으로 현재 시간을 받아와서 저장함.
 
api/mentoroom/:rid - 멘토방 조회 [get] 해당 mentoroon_id를 받아와 조회 후 모두 리턴.
  
api/mentoroom/:mid/:uid/menti_join - 멘티신청 [get] :mid- mento_id / :uid - menti_id , return: 멘티신청이 완료되었습니다
  
api/mentoroom/:mid/:uid/menti_cancel - 멘티신청취소 [get] :mid- mento_id / :uid - menti_id, return - 멘티신청이 취소되었습니다
 
api/mentoroom/:m_id/menti_list - 멘티목록 [get] mento_id를 받아와 멘토목록을 조회

api/mentoroom/fileupload/:r_id/:kind - 파일 업로드 [post] MultipartFile를 받아와(file_name, file_data(file_content에서 수정함), file_type)를 받아와 insert / url로 mentoroom_id와 file_kind를 받아옴

api/mentoroom/filelist/:r_id - 파일 리스트 [get] mentoroom_id를 받아와 파일 조회

api/mentoroom/filedelete/:r_id/:f_id - 파일 삭제 [get] file_id를 받아와 삭제, mentoroom_id를 받아와 report_check를 -1


<관리자>
api/admin/user/:auth - 사용자목록  [get] :auth = 앱에서 value 값! (0.전체학생(일반학생+멘토+멘티) 1.멘토 2.멘티 3.관리자 4.보고서제출안한멘토)

api/admin/room_info - 멘토방 설정목록 [get]

api/admin/room_info/edit - 멘토방 설정 수정 [post]

api/admin/mentoroom/:year - 멘토방 목록 [get] 해당년과월을합친숫자를 year로 받아와 목록 리턴

api/admin/mentoroom/:r_id/:m_id/confirm - 멘토신청승인 [get] mento_id와 mentoroom_id를 받아와 team_confirm을 1로 업데이트, user_auth를 1로 업데이트(멘토로승격) 
  
api/admin/mentoroom/:rid/reject - 멘토승인거절 [get] 해당 mentoroom_id를 받아와 삭제

api/admin/:aid/answer - Q&A 답변완료 [get] answer_complete 1로 업데이트

api/admin/empower/:uid - 관리자 권한 지정 [get] uid를받아와 user_auth를 3으로 업데이트

api/admin/leave/:uid - 관리자 권한 지정 해제 [get] uid를 받아와 user_auth를 4로 업데이트

api/admin/report_date/create - -보고서 제출날짜 저장 [post] reportDate에 report_start, report_end를 받아와 삽입

api/admin/report_date/:year/:semester - -보고서 제출날짜 데이터 [get] year와 semester를 받아와 검색후 리턴

api/admin/report/:year - 관리자 페이지 보고서 목록 [get] year에 년도와학기를 합쳐서 받은 후 목록 리턴. year = 0 (모든학기목록) year=20172 (2017-2학기목록)

api/admin/filedelete/:f_id - 관리자 페이지 보고서 삭제 [get] 파일의 id를 받아와 삭제

api/admin/report_confirm/:f_id - 보고서 승인 [get] 파일의 id를 받아와 file_state를 1로 업데이트

api/admin/report_reject/:f_id - 보고서 반려 [get] 파일의 id를 받아와 file_state를 2로 업데이트


<쪽지함>
api/message/list/:uid - 쪽지함목록  [get] user_id를 받아와 쪽지함 리스트 리턴

api/message/username/:uid - 쪽지받는사람이름불러오기 [get] 이름(String) 리턴

api/message/create - 쪽지 쓰기  [post] 

api/message/:mid/delete - 쪽지 삭제 [get] 메세지의 id를 받아와 삭제

api/message/:mid - 쪽지 조회 [get] 메세지의 id를 받아와 조회함


<회원정보관련>
api/updatepassword - 비밀번호변경 [post] user객체에 변경할 비밀번호와 user_id를 받아옴.
  login_record가 1이면 (로그인한적있음-메뉴에 비밀번호변경을 누른상태) 비밀번호를 변경하고,
  login_record가 0이면 (로그인한적없음-최초로그인) 비밀번호 변경 후 user_id, user_auth, user_name을 담아서 보내줌
  
api/login - 로그인 [post] user객체에 비밀번호와 아이디를 받아옴. 저장되어있는 비밀번호와 입력한 비밀번호가 맞는지 확인 후 user_id, user_auth, user_name을 담아서 보내줌

api/login_record - 로그인기록조회 [post] user_id를 받아와서 로그인기록을 조회함. + service 내용 추가
 
api/:uid/check_userauth - auth 확인 [get] 앱 최초 실행시 user_id를 받아와서 user_auth를 조회함. (localstroage에 저장되어있는 user_auth와 다를시 로그아웃 시키기)
 
