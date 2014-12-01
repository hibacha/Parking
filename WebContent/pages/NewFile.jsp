<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=utf-8" language="java"
	import="java.util.*, java.text.*;" errorPage=""%>
<%!DateFormat tipe = new SimpleDateFormat("EEE, MMM d, ''yy");
	Calendar cal = Calendar.getInstance();%>
<%
	out.print(tipe.format(cal.getTime()));
%>
Server Version:
<%=application.getServerInfo()%><br>
Servlet Version:
<%=application.getMajorVersion()%>.<%=application.getMinorVersion()%>
JSP Version:
<%=request.getAttribute("att1")%>
<c:out value="${att1}"></c:out>
<c:out value="${param['att1']}"></c:out>
<c:forEach items="${names}" var="element">
	<c:choose>
		<c:when test="${att1 == element}">hahah</c:when>
		<c:otherwise>
			<c:out value="${element}"></c:out>
		</c:otherwise>
	</c:choose>
</c:forEach>


