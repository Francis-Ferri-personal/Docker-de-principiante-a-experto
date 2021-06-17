jQuery(document).ready(function(){$("body").on("click","button#sendEmailToFriend",validateEmailForm);});var reCaptchaUtil=function(){return{reloadSuccess:function(){},reload:function(onReloadSuccess){this.reloadSuccess=onReloadSuccess;
Recaptcha.reload();},reloadAndCopy:function(copyAfterSelector){this.reload(function(){var copyAfterElement=$(copyAfterSelector||"#messageBlock");
copyAfterElement.next().remove();copyAfterElement.after($("#newcaptchaDiv").html());});}};}();var openOverLay=false;var nameReg=/^[A-Za-z\s]+$/;
var emailReg=/^[_A-Za-z0-9-]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+([\._A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/;function validateEmailForm(form){if(validForm()){form.submit();
}else{return false;}}function validForm(){var error=false;if($("#recipientEmails").val().trim()==""){error=true;$("#recipentEmailErrMsg").removeClass("show").addClass("dontShow");
$("#emptyRecipentEmailErrMsg").removeClass("dontShow").addClass("show");$("#recipientEmailLabel").addClass("error-label");
}else{if(!validateMultipleEmailIds()){error=true;$("#emptyRecipentEmailErrMsg").removeClass("show").addClass("dontShow");
$("#recipentEmailErrMsg").removeClass("dontShow").addClass("show");$("#recipientEmailLabel").addClass("error-label");}else{$("#emptyRecipentEmailErrMsg").removeClass("show").addClass("dontShow");
$("#recipentEmailErrMsg").removeClass("show").addClass("dontShow");$("#recipientEmailLabel").removeClass("error-label");}}if($("#yourName").val().trim()==""){error=true;
$("#emptyUserNameErrMsg").removeClass("dontShow").addClass("show");$("#userNameErrMsg").removeClass("show").addClass("dontShow");
$("#nameLabel").addClass("error-label");}else{if(!validateName()){error=true;$("#emptyUserNameErrMsg").removeClass("show").addClass("dontShow");
$("#userNameErrMsg").removeClass("dontShow").addClass("show");$("#nameLabel").addClass("error-label");}else{$("#emptyUserNameErrMsg").removeClass("show").addClass("dontShow");
$("#userNameErrMsg").removeClass("show").addClass("dontShow");$("#nameLabel").removeClass("error-label");}}if($("#yourEmail").val().trim()==""){error=true;
$("#emptyUserEmailErrMsg").removeClass("dontShow").addClass("show");$("#userEmailErrMsg").removeClass("show").addClass("dontShow");
$("#userEmailLabel").addClass("error-label");}else{if(!validateUserEmailId()){error=true;$("#userEmailErrMsg").removeClass("dontShow").addClass("show");
$("#emptyUserEmailErrMsg").removeClass("show").addClass("dontShow");$("#userEmailLabel").addClass("error-label");}else{$("#emptyUserEmailErrMsg").removeClass("show").addClass("dontShow");
$("#userEmailErrMsg").removeClass("show").addClass("dontShow");$("#userEmailLabel").removeClass("error-label");}}if(grecaptcha.getResponse().length==0){error=true;
$("#incorrectCaptchaSolution").removeClass("dontShow");$("#captchaResponseLabel").addClass("error-label");}if(error){$("#emailErrorMsgContent").removeClass("dontShow").addClass("show");
$("#emailErrorMsgContent").attr("data-message-type","error");return false;}else{var emailMsg=$("#emailmessage").val()==undefined?"":$("#emailmessage").val().trim();
if(emailMsg!=""){emailMsg=emailMsg.replace(/"/g,"");$("#emailmessage").val(emailMsg);}$("#emailErrorMsgContent").removeClass("show").addClass("dontShow");
return true;}}function validateName(){var yourName=$("#yourName").val();if(!nameReg.test(yourName)){return false;}else{return true;
}}function validateUserEmailId(){var emailId=$("#yourEmail").val();if(!emailReg.test(emailId.trim())){return false;}else{return true;
}}function validateMultipleEmailIds(){var multipleIds=$("#recipientEmails").val();var Ids=multipleIds.split(",");for(var i=0;
i<Ids.length;i++){if(!validateEmailId(Ids[i].trim())){return false;}}return true;}function validateEmailId(emailId){return(emailReg.test(emailId))?true:false;
}function loadEmailOverlay(id,contentType){var url=contextRoot+"/includes/emailtofriendoverlay.jsp";var div="emailOverlayDiv";
loadEmailOverlayContent(url,div,id,contentType,true);}var savedEmailParamsObject=null;var loadEmailOverlayObject=function(){return{loadEmailOverlayAction:function(emailParamsObject){var url=emailParamsObject.url;
var div=emailParamsObject.div;var id=emailParamsObject.id;var contentType=emailParamsObject.contentType;var openOverLay=emailParamsObject.openOverLay;
var isArtifiCake=emailParamsObject.isArtifiImage;var srcUrl=$("#sourceUrl").val().split("?")[0];var contentName=$("#contentName").val();
var contentDesc=$("#contentDesc").val();var contentUrl=$("#contentUrl").val();var contentExpDate=$("#contentExpDate").val();
var reviewCount=$("#reviewCount").val();var reviewRating=$("#reviewRating").val();var divId="#"+div;$.ajaxQueue({url:url,dataType:"html",type:"GET",data:{successUrl:srcUrl,contentId:id,contentType:contentType,contentName:contentName,contentDesc:contentDesc,contentUrl:contentUrl,contentExpDate:contentExpDate,reviewCount:reviewCount,reviewRating:reviewRating,artifiCake:isArtifiCake},success:function(data){$.modal.close();
$(divId).html(data).addClass("reveal-modal small").attr("data-reveal","");if(openOverLay){$(divId).foundation("reveal","open");
var recaptchaSiteKey=$("#recaptchaSiteKey").val();grecaptcha.render("emailOverlayReCaptcha",{sitekey:recaptchaSiteKey});}}});
}};}();function loadEmailOverlayContent(url,div,id,contentType,openOverLay){var emailParamsObject={};emailParamsObject.url=url;
emailParamsObject.div=div;emailParamsObject.id=id;emailParamsObject.contentType=contentType;emailParamsObject.openOverLay=openOverLay;
emailParamsObject.isArtifiImage=false;if(typeof artifiEnabled!="undefined"&&artifiEnabled&&contentType=="PRODUCT"){savedEmailParamsObject=emailParamsObject;
saveArtifiAction="EMAIL_TO_FRIEND";Artifi.AddToCart();return;}loadEmailOverlayObject.loadEmailOverlayAction(emailParamsObject);
}function closeEmailModal(){$.modal.close();$("#emailOverlayDiv").empty();}function loadEmailSuccessOverlay(){$("#emailSuccessOverlayDiv").load(contextRoot+"/includes/emailsuccessoverlay.jsp");
$("#emailSuccessOverlayDiv").addClass("reveal-modal small").attr("data-reveal","");$(document).ready(function(){$("#emailSuccessOverlayDiv").foundation("reveal","open");
});}function loadProfileUpdateOverlay(page){$("#profileUpdateOverlayDiv").load(contextRoot+"/includes/profileupdateoverlay.jsp?page="+page);
$("#profileUpdateOverlayDiv").modal({minWidth:475,minHeight:235});}