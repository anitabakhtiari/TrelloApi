﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;


namespace Application.Events
{
    class ReminderTaskEvent : INotification
    {
        public string ConectionId { get; set; }
    
    }
}
